# Lab 2 - Connect to Neo4j
In this lab, we're going to connect to the Neo4j deployment we created in the previous step.  To get started, open the Neo4j endpoint in the Google Cloud console by navigating [here](https://console.cloud.google.com/marketplace/product/endpoints/prod.n4gcp.neo4j.io).

Click "MANAGE ON PROVIDER" to get to the Neo4j console.

![](images/01-console.png)

Once again, you'll need to agreee to the redirect.

![](images/02-redirect.png)

You should now see the Neo4j Aura console.

![](images/03-aura.png)

For the form13 instance we created, you can see three options:

(1) Explore - This will open Neo4j Bloom, the business intelligence tool.
(2) Query - This will open Neo4j Browser, a tool where we can run database queries and inspect the results.
(3) Import - This opens the Neo4j Data Importer, a graphical tool for importing data into Neo4j.

## Neo4j Browser
Let's start with Neo4j Browser.  To open it, click the link that says "Query" on the form13 instance you have running.

We're now presented with the Neo4j Browser. We can accept the defaults.  Enter the password from earlier in and then click "Connect."

![](images/04-browser.png)

You'll be presented with the Neo4j welcome screen at this point.  If you click on the little database icon in the upper left, you can see the contents of our database.

![](images/05-welcome.png)

There's nothing in our database yet.  We can see the nodes, relationships and properties areas are all blank.

![](images/06-contents.png)

Before we move on, let's check what version of Neo4j Graph Data Science (GDS) is set up.  We can do that by entering the following command into the Neo4j Browser:

    RETURN gds.version() as version

Then hit the little blue triangle play button to run it.  You should see a GDS version number.

![](images/07-gds.png)

Assuming that all looks good, let's move on...

## Neo4j Bloom
Let's also check that Neo4j Bloom is running.  Bloom is Neo4j's Business Intelligence (BI) product.  Go back to the tab where you have the Neo4j Aura console open.  Click on the "Explore" link.

![](images/08-aura.png)

You'll be presented with the Neo4j Bloom console.  Enter "neo4j" for the username and your password.  Click "Connect."

![](images/09-auth.png)

That gives you an empty Bloom scene.  In a later lab, we'll explore using Bloom.

![](images/10-bloom.png)

Now that we've connected, let's go to the next lab where we'll import some data.