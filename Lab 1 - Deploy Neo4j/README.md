# Lab 1 - Deploy Neo4j
In this lab, we're going to deploy Neo4j from the Google Cloud Marketplace.  We'll deploy two different ways.  The first is our Software as a Service (SaaS) or Database as a Service (DBaaS) offering, Neo4j AuraDB.  The second is a Neo4j IaaS listing.  That listing has a Deployment Manager template under it that we'll inspect.  We'll also look at more customizable deployment options.

## Improving the Labs
As you work through these labs, we'd really appreciate your feedback.  One way to help us improve is to open an issue by going [here](https://github.com/neo4j-partners/hands-on-lab-neo4j-and-vertex-ai/issues).  Outright bugs, usability suggestions, and general comments are all appreciated.  Pull requests are great too!

## Enable APIs
Throughout these labs, we're going to use a number of APIs.  If you haven't already enabled them, login to each service and click "Enable API."

* [Deployment Manager](https://console.cloud.google.com/dm)
* [Compute Engine](https://console.cloud.google.com/compute)
* [Cloud Storage](https://console.cloud.google.com/storage)
* [Vertex AI](https://console.cloud.google.com/vertex-ai)

In the case of Compute Engine, the dialog looks like this:

![](images/01-compute.png)

## Deploy Neo4j
There are a number of ways to deploy Neo4j on GCP.  You'll need to pick on and deploy that to use later in the labs.  If you want to deploy multiple ways, you're welcome to do that as well.

* [IaaS](IaaS/README.md)
* [SaaS](SaaS/README.md)
