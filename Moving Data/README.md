# Lab 3 - Moving Data
In this lab, we're going to take data from an Google Cloud Storage bucket and import it into Neo4j.  There are a few different ways to do this.  We'll start with a very naive LOAD CSV statement and then improve it.  

The Neo4j [Data Importer](https://data-importer.neo4j.io/) is another option.  It's a great graphical way to import data.  However, the LOAD CSV option we're using makes it really easy to pull directly from Cloud Storage, so is probably a better choice for what we need.

The dataset is from the SEC's EDGAR database.  These are public filings of something called Form 13.  Asset managers with over $100m AUM are required to submit Form 13 quarterly.  That's then made available to the public over http.  The csvs linked above were pulled from EDGAR using some python scripts.  We don't have time to run those in the lab today as they take a few hours.  But, if you're curious, they're all available [here](https://github.com/neo4j-partners/neo4j-sec-edgar-form13).  We've filtered the data to only include filings over $10m in value.

## A Day of Data
For this portion of the lab, we're going to work with a subset of the data.  Our full dataset is a year of data.  However, we'll just be playing around with a day's worth.  The data is [here](https://storage.googleapis.com/neo4j-datasets/form13/2022-02-17.csv).

You may want to download the data and load it into your favorite tool for exploring CSV files.  Pandas, Excel or anything else should be able to make short work of it.  Once you understand what's in the data, the next step would be to load it into Neo4j.

To load it in Neo4j, let's open the tab that has our Neo4j Workspace in it.  If you don't have that tab open, you can review the previous lab to get into it.

Make sure that "Query" is selected at the top.

![](images/01-workspace.png)

We're going to run a Cypher statement to load the data.  Cypher is Neo4j's query language.  LOAD CSV is part of that and allows us to easily load CSV data.  Try copying this command into Neo4j Workspace.

    LOAD CSV WITH HEADERS FROM 'https://storage.googleapis.com/neo4j-datasets/form13/2022-02-17.csv' AS row
    MERGE (m:Manager {filingManager:row.filingManager})
    MERGE (c:Company {nameOfIssuer:row.nameOfIssuer, cusip:row.cusip})
    MERGE (m)-[r1:Owns {value:toInteger(row.value), shares:toInteger(row.shares), reportCalendarOrQuarter:row.reportCalendarOrQuarter}]->(c)

It should look like the following.  You can then press the blue triangle with a circle around it to run the job.

![](images/02-cypher.png)

That will load the nodes and relationships from the file.

You'll now see the nodes, relationships and properties we loaded.  We have two kinds of nodes, manager and company.  Manager nodes are asset managers.  Company nodes are the companies that those asset manages buy shares of.  Managers are related to companies by the owns relationship.  Manager, company and owns all have properties that we can inspect as well.

Click on "Manager" under "Nodes" to automatically generate a new cypher query and run it.

![](images/03-runcypher.png)

You'll now see a subset of the managers we have in the database.  The query returns 25 of them.  It's limited because returning to many nodes in this visualization mode can make it hard to navigate.

Now, let's click on one of the managers.  Don't worry, it doesn't particularly matter which one.  Once we've clicked on it, click the graph icon at the bottom to expand it.

![](images/04-manager.png)

When it expands, we can see what companies this manager owns shares in.  In this case, DENVER WEALTH MANAGEMENT, INC. seems to only have one holding, ISHARES RUSSELL.  Note that this data set only has holdings over $10m.  Smaller holdings were filtered out in pre-processing.

Try selecting a company now.

![](images/05-manager.png)

In this case, we see the Company "ISHARES RUSSELL" has CUSIP 464287614.  Given that ISHARES RUSSELL is an ETF, not a company, it's possible our nodes should have a different name than company which is a more accurate description.

We can also click on the relationship, that is the line between the nodes to see detail on the transaction.

![](images/06-company.png)

In this case, it appears we have a report from 12-31-2021 that 68,087 shares were purchased with a value of $20,807,000.

![](images/07-relationship.png)

At this point, take some time to poke around the graph.  You can expand it by clicking the icon with two arrows pointing away from each other in the upper right.  You may also want to click on the "Company" node label to query those.

As you play around, you may start to see some of the structure in the graph with recurrent connections and interesting communities of managers who have similar holdings.

![](images/08-nodes.png)

There's an interesting issue hiding in our dataset.  Because of the way we loaded it, we have a bunch of duplicate nodes.  Try running this query and we can find them:

    MATCH (n:Company{cusip:"78462F103"}) RETURN n LIMIT 25

![](images/09-query.png)

Do you see what happened?  Different asset managers call securities slightly different things.  In this case, the commonly held SPY or S&P 500 ETF has a number of different names.

Issues like this led to the creation of the [CUSIP](https://www.cusip.com/).  So, in these filings asset managers may enter all sorts of names, but the CUSIP will be unique.  In the next section we're going to key off the CUSIP and resolve this issue.

Now that we have some understanding of this portion of the dataset, we're going to delete it.  Then we'll load the full data set.  To delete all the nodes and relationships in the database, run this command:

    MATCH (n) DETACH DELETE n;

![](images/10-delete.png)

Now, all your data should be deleted.  Note that the GUI is still caching some property keys.

## A Year of Data
The LOAD CSV statement we used before was pretty naive.  It didn't create any indices.  It also loaded the nodes and relationships simultaneously.  Both of those are inefficient approaches.  It wasn't a big deal as that single day of data was about 57kb.  However, we'd now like to load a full year of data.  That's 49.5mb of data, so we have to be a bit more efficient.  That new dataset is [here](https://storage.googleapis.com/neo4j-datasets/form13/2021.csv).

If you're curious, you can read a bit about the intracties of optimizing those loads here:

* https://neo4j.com/developer/guide-import-csv/#_optimizing_load_csv_for_performance
* https://graphacademy.neo4j.com/courses/importing-data/

We're also going to change our data model a bit.  This is to make it work better in the Graph Data Science (GDS) component of our lab where we create graph embedding.  We're going to move some properties out of the owns relationship we had previously, into a new node type call "Holding."

First, let's create constraints, essentially a primary key, for the company and manager node types.  Company keys should be cusips.  We know a CUSIP is unique because that is the whole point of one.  They are identifiers for securities designed to be unique.  You can read more about them [here](https://www.cusip.com).  This is a much better field to use than nameOfIssuer because it avoids the problem where some companies (like Apple or Apple, Inc.) are referred to by slightly different names.

The manager is a little more difficult.  But, we're going to assume that the filingManager field is both unique and correct.

    CREATE CONSTRAINT IF NOT EXISTS FOR (p:Company) REQUIRE (p.cusip) IS NODE KEY;
    CREATE CONSTRAINT IF NOT EXISTS FOR (p:Manager) REQUIRE (p.filingManager) IS NODE KEY;

That should give this:

![](images/11-constraint.png)

Now, the holding is a bit more interesting.  It needs a compound key.  Because a holding is unique in the context of:

(1) Being held by a particular filingManager
(2) Being a particular cusip
(3) Being for a particular reportOrCalendarQuarter

So, we're going to need something with a compound key like this:

    CREATE CONSTRAINT IF NOT EXISTS FOR (p:Holding) REQUIRE (p.filingManager, p.cusip, p.reportCalendarOrQuarter) IS NODE KEY;

That should give this:

![](images/12-constraint.png)

Now that we have all the constraints, let's load our nodes.  We're going to do that first and grab the relationships in a second pass.  While we could do it in a single cypher statement, as we did above, it's more efficient to run them in series.

Let's load the companies first.  We're going to have a lot of duplication, since our key is CUSIP and many different rows in our csv, each representing a filing, have the same cusip.  So, we need to enhance our LOAD CSV statement a little bit to deal with those duplicates.

    LOAD CSV WITH HEADERS FROM 'https://storage.googleapis.com/neo4j-datasets/form13/2021.csv' AS row
    MERGE (c:Company {cusip:row.cusip})
    SET
        c.nameOfIssuer=row.nameOfIssuer

That should give this:

![](images/13-company.png)

Now let's load the Managers:

    LOAD CSV WITH HEADERS FROM 'https://storage.googleapis.com/neo4j-datasets/form13/2021.csv' AS row
    MERGE (m:Manager {filingManager:row.filingManager})

That should give this:

![](images/14-manager.png)

And now we can load our Holdings:

    LOAD CSV WITH HEADERS FROM 'https://storage.googleapis.com/neo4j-datasets/form13/2021.csv' AS row
    MERGE (h:Holding {filingManager:row.filingManager, cusip:row.cusip, reportCalendarOrQuarter:row.reportCalendarOrQuarter})
    ON CREATE SET
        h.value=row.value, 
        h.shares=row.shares,
        h.target=row.target,
        h.nameOfIssuer=row.nameOfIssuer

That should give this:

![](images/15-holding.png)

Well, this is cool.  We've got all our nodes loaded in.  Now we need to tie them together with relationships.  We're going to want two kinds of relationships:

(1) A manager "OWNS" holdings
(2) Holdings are "PARTOF" companies

So, let's put together the owns relationship first.

    LOAD CSV WITH HEADERS FROM 'https://storage.googleapis.com/neo4j-datasets/form13/2021.csv' AS row
    MATCH (m:Manager {filingManager:row.filingManager})
    MATCH (h:Holding {filingManager:row.filingManager, cusip:row.cusip, reportCalendarOrQuarter:row.reportCalendarOrQuarter})
    MERGE (m)-[r:OWNS]->(h)

That should give this:

![](images/16-owns.png)

And, now we can create the PARTOF relationships:

    LOAD CSV WITH HEADERS FROM 'https://storage.googleapis.com/neo4j-datasets/form13/2021.csv' AS row
    MATCH (h:Holding {filingManager:row.filingManager, cusip:row.cusip, reportCalendarOrQuarter:row.reportCalendarOrQuarter})
    MATCH (c:Company {cusip:row.cusip})
    MERGE (h)-[r:PARTOF]->(c)

That should give this:

![](images/17-partof.png)

You've done it!  We've loaded our data set up.  We'll explore it in the next lab.  But, feel free to poke around in the Neo4j Workspace a bit as well.
