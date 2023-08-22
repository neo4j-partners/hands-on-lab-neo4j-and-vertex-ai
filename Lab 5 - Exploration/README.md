# Lab 5 - Exploration
Bloom is Neo4j's business intelligence (BI) tool.  It's integrated into Neo4j Workspace.  

## Exploration with Neo4j Bloom

To open Bloom, go to the Neo4j Aura Console and click "Open" as in Lab 2.  From there, make sure the "Explore" tab at the top is selected.

![](images/01-bloom.png)

Perspectives in Bloom define a specific business view or domain from the target Neo4j graph. A single Neo4j graph can be viewed through different perspectives, each tailored for a different business purpose.

Click the slider icon in the upper left to open the perspective menu.

![](images/02-perspective.png)

Now click the refresh icon to refresh the perspective.  This pulls the latest data model from our database.  Click "Refresh" to agree to refresh the perspective.

![](images/03-refresh.png)

When that is complete, select "Add category" in the perspective menu. 

![](images/04-add-category.png)

You should see a pop-up with the node labels in the database. Select both "Company" and "Manager."

![](images/05-add-category.png)

When that is complete, you should see labels for Manager and Company. Click the perspective button again to close this menu.

![](images/06-complete-perspective.png)

Now that our perspective is refreshed with updated labels, we're ready to start exploring.

![](images/07-bloom.png)

The easiest way we can explore data in Bloom is to have it generate a view for us.  To do so, click in the search bar and click on "Show me a graph."  Hit enter.

![](images/08-show.png)

In this case, we got a view with a company node at the center and 80 managers that own the company through their holdings.

![](images/09-show.png)

We can click on the company to see its name.

![](images/10-show.png)

Now let's try finding a new graph.  Click in the search bar again and select "Manager."

![](images/11-manager.png)

Now select "Company."

![](images/12-company.png)

Now hit enter.

![](images/13-query.png)

That gives us search results for paths that go from Manager to Company.  We hit a limit of 1000, so it's not visualizing everyone.

Next, we will apply some point-and-click data science to our graph.  Click on the atom icon to open the data science menu.

![](images/14-data-science.png)

Click "Add algorithm."

![](images/15-add.png)

Select "Degree Centrality" from the drop-down.

![](images/16-degree.png)

Click "Apply algorithm."

![](images/17-degree.png)

Now that we've run the algorithm, we can choose how we want to visualize the results in the graph.  Choose "Size scaling". The more central nodes in our graph are now shown as larger. 

![](images/18-size.png)

These are just a few examples of what you can do with Bloom.  Feel free to explore!