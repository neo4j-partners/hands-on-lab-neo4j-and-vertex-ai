# Discussion - Questions and Next Steps
This section has some thoughts on future work, improvements and next steps.  Please feel free to [PR](https://github.com/neo4j-partners/hands-on-lab-neo4j-and-vertex-ai/pulls) your ideas and suggestions.

## Lab 0 - Sign Up
To do

## Lab 1 - Deploy Neo4j
The lab deploys Neo4j AuraDS Professional through a deep integration in the Google Cloud Console [here](https://console.cloud.google.com/marketplace/product/endpoints/prod.n4gcp.neo4j.io).  There are many other ways to deploy Neo4j.  If AuraDS Professional doesn't meet your needs, we probably have a different approach that does.  The [Marketplace](https://console.cloud.google.com/marketplace/browse?filter=partner:Neo4j) is a good place to look for more options.

## Lab 2 - Connect to Neo4j
There are currently some issues you may have noticed in accessing the Aura console directly versus a redirect from the Google Cloud Console.  We're working to improve that experience.

## Lab 3 - Moving Data
We used LOAD CSV to pull data in.  That is one of many ways.  Neo4j [Data Loader](https://data-importer.neo4j.io/) is another.  We're exploring incorporating it into this lab.

We're also working with Google on [Dataflow](https://cloud.google.com/dataflow) integration.  A [PR to Apache Beam](https://github.com/apache/beam/pull/15916) has already been accepted.  We're just working to get the templates that would wrap it together.

The Neo4j [Spark Connector](https://neo4j.com/docs/spark/current/) is another way to get data in.  We've been working with the Google [Dataproc](https://cloud.google.com/dataproc) team on some demos of that.  It works today but some walkthrough are in progress.

## Lab 4 - Exploration
This section of the lab could be expanded.  A data enrichment exercise might be really interesting.  We've been doing work with [EKG elsewhere](http://github.com/neo4j-partners/apevue-knowledge-graph) that could be relevant.

## Lab 5 - Parsing Data
To do

## Lab 6 - Chatbot
To do

## Lab 7 - Sematic Search
To do

## Lab 8 - Cleanup
We should automate a lot of this.

## Next Steps
We hope you enjoyed these labs.  If you have any questions, feel free to reach out directly to any of us.  We'd love the opportunity to explore and support your use cases.
