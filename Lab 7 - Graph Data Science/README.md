# Lab 08 - Graph Data Science
In this lab, we're going to work with some more notebooks.

## Exploring Cypher
Now that we've got Vertex AI Workbench setup, we're going to run a few queries using the python API.  Earlier we used the graphical interface in the Neo4j Browser.  We're going to do the same thing but in a programmatic way.  

Let's start by firing up a notebook.  Click on the new "hands-on-lab-neo4j-and-vertex-ai" in the file explorer.  Drill down to Lab 7 and open the [exploring_cypher.ipynb](exploring_cypher.ipynb) notebook.  Start up a Python kernel and work through that noteboook!

## Semantic Search
We're going to generate a graph embedding using Neo4j Graph Data Science (GDS).  We'll store that embedding as a vector in Neo4j.  We can then use that to power a semantic search.

Finally, we'll export the embedding so we can use it as a novel feature to train our machine learning model.

So, let's get started!  Open up the [semantic_search.ipynb](semantic_search.ipynb) notebook in Vertex AI Workbench.  Then run through it.