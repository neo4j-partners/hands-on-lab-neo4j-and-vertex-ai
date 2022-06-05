# hands-on-lab-neo4j-and-vertex-ai
Neo4j is the [leading graph database](https://neo4j.com/whitepapers/forrester-wave-graph-data-platforms/) vendor.  We’ve worked closely with GCP Engineering for years.  Our products, AuraDB and AuraDS are offered as managed services on GCP.  Neo4j Enterprise Edition, which includes Graph Database, Graph Data Science and Bloom is offered in the [Google Cloud Marketplace](https://console.cloud.google.com/marketplace/browse?q=neo4j).

In this hands on lab, you’ll get to learn about Neo4j and GCP Vertex AI.  The lab is intended for data scientists and data engineers.  We’ll walk through deploying Neo4j and Vertex AI on GCP in your own GCP account.  Then we’ll get hands on with a real world dataset, building a machine learning pipeline that takes advantage of features generated using Neo4j Graph Data Science to improve prediction in GCP Vertex AI.  You’ll come out of this lab with enough knowledge to apply graph feature engineering to your own datasets.

We’re going to analyze the quarterly filings of asset managers with $100m+ assets under management (AUM).  These are regulatory filing made to the Securities and Exchange Commission’s (SEC) EDGAR system.  We’re going to show how to load that data from a GCP Cloud Storage bucket into Neo4j.  We’ll then explore the relationships of different asset managers and their holdings using the Neo4j Browser and Neo4j’s Cypher query language.

Finally, we’ll use Neo4j Graph Data Science to create a graph embedding from our data, export that out, and run supervised learning algorithms in GCP Vertex AI.  We’ll try to predict what holdings asset managers will maintain or enlarge in the next quarter.  

If you’re in the capital markets space, we think you’ll be interested in potential applications of this approach to creating new features for algorithmic trading, understanding tail risk, securities master data management and so on.  If you’re not in the capital markets space, this session will still be useful to learn about building machine learning pipelines with Neo4j and GCP Vertex AI.

## Venue
These workshops are organized onsite in a GCP office.

## Duration
3 hours.

## Prerequisites
You'll need a laptop with a web browser.  Your browser will need to be able to access the Google Cloud Console and port 7474 on a Neo4j deployment running in GCP.

## Agenda - Part 1
* Introductions
* Lecture - [Introduction to Neo4j](https://docs.google.com/presentation/d/1WvPzs_JEh8uuKEAQGecH1rUd1NoRzqZIKc-hQkuBdXQ/edit?usp=sharing) (15 min)
    * What is Neo4j?
    * Customer use cases
    * How is it deployed and managed on GCP?
* [Lab 0 - Signup for Google Cloud](Lab%200%20-%20Signup%20for%20Google%20Cloud) (15 min)
    * Singup for Google
    * Signup for Google Cloud
* [Lab 1 - Deploy Neo4j](Lab%201%20-%20Deploy%20Neo4j) (15 min)
    * Improving the Labs
    * Enable APIs
    * Deploy Neo4j with Google Deployment Manager on IaaS
* [Lab 2 - Connect to Neo4j](Lab%202%20-%20Connect%20to%20Neo4j/README.md) (15 min)
    * Neo4j Browser
    * Neo4j Bloom
    * Interacting via Shell
* Break (10 min)

## Agenda - Part 2
* Lecture - [Moving Data](https://docs.google.com/presentation/d/1O6Oy_GbDYYCvQanUyUCl30hQdSsy9kKL53Jgl23Nnsk/edit?usp=sharing) (10 min)
    * LOAD CSV
    * Apache Beam and Google Dataflow
    * Apache Spark and Google Dataproc
    * Apache Kafka and Cloud Cloud
* [Lab 3 - Moving Data](Lab%203%20-%20Moving%20Data/README.md) (15 min)
    * A Day of Data
    * A Year of Data
* [Lab 4 - Exploring Data](Lab%204%20-%20Exploring%20Data/README.md) 15 min)
    * Pandas
    * Cypher Queries
    * Vizualization with Neo4j Bloom
* Break (10 min)

## Agenda - Part 3
* Lecture - [Graph Data Science](https://docs.google.com/presentation/d/133tXAH--V7Uvyd0Ylhs08_xDEPfl64uvaNNdxeHVpvk/edit?usp=sharing) (10 min)
    * Why Graph Data Science
    * Neo4j GDS Library and Catalog
    * Algorithm Families and Examples
    * Similarity
    * Centrality
    * Community Detection
    * Graph Machine Learning
* [Lab 5 - Graph Data Science](Lab%205%20-%20Graph%20Data%20Science/README.md) (15 min)
    * Creating a Graph Embedding
    * Exporting to pandas
    * Writing to Google Cloud Storage
* Lecture - [Vertex AI](https://docs.google.com/presentation/d/19TewJE5YgESTmN9qW4MOtFP4m39uPhUaRXErkCzrdbE/edit?usp=sharing) (15 min)
    * What is Vertex AI?
    * Using Vertex AI with Neo4j
* [Lab 6 - Vertex AI](Lab%206%20-%20Vertex%20AI) (20 min)
    * Raw Data
    * Data with Embedding
* [Lab 7 - Cleanup](Lab%207%20-%20Cleanup) (15 min)
* [Discussion - Questions and Next Steps](Discussion%20-%20Questions%20and%20Next%20Steps.md) (10 min)
