# Lab 4 - Exploration
In this lab, we'll use Explore, Neo4j's business intelligence (BI) tool, to explore our data.

## Exploration with Neo4j Bloom
The Explore tool, powered by Neo4j Bloom, is a graph exploration tool for visually interacting with graph data.

A graph puts information into context. People, places, and things. Products, services, and accounts. Transactions, identities, and events. Explore shows the patterns you intuitively know are there in your data, and reveals new patterns you may not have expected.

Click on the 'Explore' option under Tools.

![](images/01.png)

Now click on "Show me a graph."  Hit enter.

![](images/11.png)

In this case, we got a view with a two company nodes at the center and 100+ managers that own shares of that company.

![](images/12.png)

We can click on the company to see its name.

Now let's try finding a new graph.  Click on the X in the search bar to clear the contents of it.  

![](images/13.png)

Then click in the search bar

![](images/14.png)

Select "Manager."

![](images/15.png)

Now select "OWNS."

![](images/16.png)

Now select "Company" 
 
[](images/17.png)

Now hit either hit enter or press the play button.

![](images/18.png)

That gives us search results for paths that go from Manager to Company.  We hit a limit of 1000, so it's not visualizing everything.

Next, we will apply some point-and-click data science to our graph.  Click on the atom icon to open the data science menu.

![](images/19.png)

Click "Add algorithm."

![](images/20.png)

Open the drop down menu.

![](images/21.png)

Select "Degree Centrality."

![](images/22.png)

Click "Apply."

![](images/23.png)

That gives us this.

Now that we've run the algorithm, we can choose how we want to visualize the results in the graph.  

Choose "Size scaling."

![](images/24.png)

The more central nodes in our graph are now shown as larger. 

![](images/25.png)

These are just a few examples of what you can do with Bloom.  Feel free to explore!

#### Progress:  ████░░░ 4/7 Labs Completed!