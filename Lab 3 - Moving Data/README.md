# Lab 3 - Moving Data
In this lab, we're going to take data from an Google Cloud Storage bucket and import it into Neo4j.  There are a few different ways to do this.  We'll start with the LOAD CSV function and later try the Data Importer.

The dataset is pulled from the SEC's EDGAR database.  These are public filings of something called form 13.  Asset managers with over $100m AUM are required to submit Form 13 quarterly.  That's then made available to the public over http.  The csvs linked above were pull from EDGAR using some python scripts.  We don't have time to run those in the lab today as they take a few hours.  But, if you're curious, they're all available [here](https://github.com/neo4j-partners/neo4j-sec-edgar-form13).

## LOAD CSV 
For this portion of the lab, we're going to work with a subset of the data.  Our full dataset is a year of data.  However, we'll just be playing around with a day's worth.  The data is [here](https://storage.googleapis.com/neo4j-datasets/form13/form13.csv).

You may want to download the data and load it into your favorite tool for exploring CSV files.  Pandas, Excel or anything else should be able to make short work of it.  Once you understand what's in the data, the next step would be to load it into Neo4j.

To load it, let's open the tab that has our Neo4j Browser in it.  If you don't have that tab open, you can review the previous lab to grab the address of it again.

![](images/01-neo4jbrowser.png)

We're going to run a Cypher statement to load the data.  Cypher is Neo4j's query language.  LOAD CSV is part of that and allows us to easily load CSV data.  Try copying this command into the Neo4j Browser.

    LOAD CSV WITH HEADERS FROM 'https://storage.googleapis.com/neo4j-datasets/form13/2022-02-17.csv' AS row
    MERGE (m:Manager {filingManager:row.filingManager})
    MERGE (c:Company {nameOfIssuer:row.nameOfIssuer, cusip:row.cusip})
    MERGE (m)-[r1:Owns {value:toInteger(row.value), shares:toInteger(row.shares), reportCalendarOrQuarter:row.reportCalendarOrQuarter}]->(c)

It should look like the following.  You can then press the blue triangle to run the job.

![](images/02-cypher.png)

That will load the nodes and relationships from the file.  You should see the number of nodes loaded and so forth.  When that completes, click the database icon in the upper left to inspect what we've loaded.

![](images/03-runcypher.png)

Sometimes it takes a minute to populate this menu, but once it's populated you'll see the nodes, relationships and properties we loaded.  We have two kinds of nodes, Manager and Company.  Manager nodes are asset managers.  Company nodes are the companies that those asset manages buy shares of.  Managers are related to companies by the "owns" relationship.  Manager, company and owns all have properties that we can inspect as well.

Click on "Manager" under "Node Labels to automatically generate a new cypher query.

![](images/04-database.png)

You'll now see a subset of the managers we have in the database.  The query returns 25 of them.  It's limited because returning to many nodes in this visualization mode can make it hard to navigate.

![](images/05-manager.png)

Now, let's click on one of the managers.  Don't worry, it doesn't particularly matter which one.  Once we've clicked on it, click the graph icon at the bottom to expand it.

![](images/06-manager.png)

When it expands, we can see what companies this manager owns shares in.  In this case, CHANNING GLOBAL ADVISORS, LLC seems to only have one holding, CANADIAN PACIFIC RAILWAY LTD.  Note that this data set only has holdings over $10m.  Smaller holdings were filtered out in pre-processing.

We can also click on the relationship, that is the line between the nodes to see detail on the transaction.

![](images/07-manager.png)

In this case, it appears we have a report from 12-31-2021 that 139781 shares were purchased with a value of $10,063,000.

![](images/08-relationship.png)

At this point, take some time to poke around the graph.  You can expand it by clicking the icon with two arrows pointing away from each other in the upper right.  You may also want to click on the "Company" node label to query those.

As you play around, you may start to see some of the structure in the graph with recurrent connections and interesting communities of managers who have similar holdings.

![](images/09-nodes.png)

Now that we have some understanding of this portion of the dataset, we're going to delete it.  Then we'll load the full data set.  To delete the dataset, you'll want to run this query in the Neo4j Browser:

    MATCH (n)
    DETACH DELETE n;

Paste it into the browser and then click the blue triangle to run it.

![](images/10-delete.png)

Note that some property keys still exist.  We only deleted the nodes.  That's ok as we're going to be using the same property keys in the next step.  We just didn't want any duplicate nodes.

![](images/11-delete.png)

## Data Importer
There are many ways to load data into Neo4j.  The LOAD CSV statement we used before was pretty naive.  It didn't create any indices.  It also loaded the nodes and relationships simultaneously.  Both of those are inefficient approaches.  It wasn't a big deal as that single day of data was about 57kb.  However, we'd now like to load a full year of data.  That's 49.5mb of data, so we have to be a bit more efficient.

If you're curious, you can read a bit about the intracties of optimizing those loads here:

* https://neo4j.com/developer/guide-import-csv/#_optimizing_load_csv_for_performance
* https://graphacademy.neo4j.com/courses/importing-data/

Of course, there's an even simpler solution.  The data importer will generate these indices for us.  

Let's download the dataset by pointing a web browser [here](https://storage.googleapis.com/neo4j-datasets/form13/form13.csv).  As before, you may want to poke around the file just to see what's in it.  You'll notice the file has a new column in it, "target."  We're going to try to solve a supervised learning problem later, so this is our target.  It's true if a given holding increased in number of shares in the next quarter.  It's false if it shrank.  So, we're predicting if assset managers are going to expand or shrink their positions.

Now let's fire up the data importer by navigating [here](http://data-importer.graphapp.io/).  You may have to dismiss a few welcome dialogs.  Once you're at the main page, click on "browse" and select the csv file we just downloaded.

![](images/12-importer.png)

You'll see that the file has loaded from the menu on the left.  Now click on "add node."

![](images/13-importer.png)

We'll call this first node "Manager." You may see a help dialog about creating a relationship that you can dismiss.  For "file," select "form13.csv"

![](images/14-addnode.png)

Now we're going to add a property as well.  Click on "Add from file."

![](images/15-addnode.png)

Select "filingManager" and click "confirm." Under "ID" in the bottom right, select "filingManager."

![](images/16-properties.png)

Now let's add another node and a relationship.  To do so, mouse over the Manager node and drag a new node out of it.

![](images/17-properties.png)

Now we're going to label the new node.  You'll want to set that as "Company," select the form13.csv file and then click "Add from file" on that one too.

![](images/18-relationship.png)

For the company, select "cusip," "nameOfIssuer" and click "confirm."  Under "ID" select "cusip."

![](images/19-company.png)

Our data model is getting pretty close.  The last thing we want to do is add detail to the relationship.  Click on the line between the two nodes. For "type" enter "Owns" and for the "File" select "form13.csv."  For the "ID" on the relationship, select "filingManager" for "from" and "cusip" for "to."

![](images/20-relationship.png)

We need to add a few properties to the relationship.  Click "Add from File" and select "reportCalendarOrQuarter," "value," "shares" and "target."  Click "confirm."

![](images/21-relationship.png)

Now we need to change the data type on a few of those properties.  Target should be a boolean.  Value and shares should both be float.  You can click the pencil icon next to each to edit them.

![](images/22-types.png)

Now our data model is all set.  We need to connect the importer up to our database.  To do so, click "Run Import" in the upper left.  

![](images/23-connect.png)

That prompts for three fields.  The username is neo4j.  The password is the same as you entered when you deployed via marketplace, possibly "foo123."

The host field will be the external IP of the Google Compute Engine instance we were working with earlier with a protocol and port added. A particular example is neo4j://34.138.21.128:7687

With all that filled in, click "Run."

![](images/24-connect.png)

You'll then see a progress bar displayed as it runs.  Now may be a good time to grab a coffee.  Runtime is dependent on your internet connection as the file is uploading from your laptop.

![](images/25-running.png)

When complete, a summary of the import will be displayed.

![](images/26-complete.png)

Click "Show key query" and "Show load query."  We can now see the Cypher that the Data Importer generated for us.

![](images/27-query.png)

Our load is all done!  You can click "Review in Neo4j Browser" to get redirected to the Neo4j Browser and poke around.  Of course, we'll be doing that in the next lab!

![](images/28-browser.png)

Congratulations on setting up Neo4j on GCP, connecting to it and loading some data!