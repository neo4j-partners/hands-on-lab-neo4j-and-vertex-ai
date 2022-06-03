# Lab 6 - Vertex AI
Now we've reached what we've been working toward -- pulling graph data into Vertex AI.  We're going to work with two notebooks in this lab.

## Enable the API
If you haven't already, you're going to need to enable the Vertex AI API.  You can do that by going [here](https://console.cloud.google.com/vertex-ai).

![](images/01-compute.png)

## Raw Data
First, we're going to work with the raw data set.  We'll do the following:
* Pull it from a bucket
* Break into train and test sets
* Train a classifier

To do that, open the notebook [here](vertex_ai_raw.ipynb).

## Data with Embedding
Now, let's build a similar classifier to the last one.  But, this time we're going to use data from our graph embedding.  We can do that [here](vertex_ai_embedding.ipynb).
