# hands-on-lab-neo4j-and-vertex-ai
Neo4j is the [leading graph database](https://db-engines.com/en/ranking/graph+dbms) vendor.  We’ve worked closely with Google Cloud engineering for years.  Our products, AuraDB and AuraDS are offered as managed services on Google Cloud.  Neo4j Enterprise Edition, which includes Graph Database, Graph Data Science and Bloom is offered in the [Google Cloud Marketplace](https://console.cloud.google.com/marketplace/browse?q=neo4j).

In this hands on lab, you’ll get to learn about [Neo4j](https://neo4j.com/) and [Google Cloud Vertex AI](https://cloud.google.com/vertex-ai).  The lab is intended for data scientists and data engineers.  We’ll walk through deploying Neo4j and Vertex AI in your own Google Cloud account.  Then we’ll get hands on with a real world dataset, building a machine learning pipeline that takes advantage of features generated using Neo4j Graph Data Science to improve prediction in Vertex AI.  You’ll come out of this lab with enough knowledge to apply graph feature engineering to your own datasets.

We’re going to analyze the quarterly filings of asset managers with $100m+ assets under management (AUM).  These are regulatory filings made to the Securities and Exchange Commission’s (SEC) EDGAR system.  We’re going to show how to load that data from a Google Cloud Storage bucket into Neo4j.  We’ll then explore the relationships of different asset managers and their holdings using the Neo4j Browser and Neo4j’s Cypher query language.

Finally, we’ll use Neo4j Graph Data Science to create a graph embedding from our data, export that out, and run supervised learning algorithms in Vertex AI.  We’ll try to predict what holdings asset managers will maintain or enlarge in the next quarter.  

If you’re in the capital markets space, we think you’ll be interested in potential applications of this approach to creating new features for algorithmic trading, understanding tail risk, securities master data management and so on.  If you’re not in the capital markets space, this session will still be useful to learn about building machine learning pipelines with Neo4j and Vertex AI.

## Venue
These workshops are organized onsite in a Google office.

## Duration
3 hours.

## Prerequisites
You'll need a laptop with a web browser.  Your browser will need to be able to access the Google Cloud Console and port 7474 on a Neo4j deployment running on Google Cloud.  If your laptop has a firewall you can't control on it, you may want to bring your personal laptop.

If you have a Google Cloud account with permissions that allow you to invoke Vertex AI, deploy from Marketplace and create a Cloud Storage bucket, then you can use that.  If not, we'll walk you through creating a Google Cloud account.

## Agenda
### Part 1
* Introductions
* Lecture - [Introduction to Neo4j](https://docs.google.com/presentation/d/1WvPzs_JEh8uuKEAQGecH1rUd1NoRzqZIKc-hQkuBdXQ/edit?usp=sharing) (10 min)
    * What is Neo4j?
    * Customer use cases
    * How is it deployed and managed on Google Cloud?
* [Lab 0 - Signup for Google Cloud](Lab%200%20-%20Signup%20for%20Google%20Cloud) (15 min)
    * Improving the Labs
    * Signup for a Google Cloud Account
    * Activate your Google Cloud account
* [Lab 1 - Deploy Neo4j](Lab%201%20-%20Deploy%20Neo4j) (15 min)
    * Deploying Neo4j AuraDS Professional
* [Lab 2 - Connect to Neo4j](Lab%202%20-%20Connect%20to%20Neo4j/README.md) (10 min)
    * Neo4j Workspace
* Break (10 min)

### Part 2
* Lecture - [Moving Data](https://docs.google.com/presentation/d/1O6Oy_GbDYYCvQanUyUCl30hQdSsy9kKL53Jgl23Nnsk/edit?usp=sharing) (10 min)
    * LOAD CSV
    * Apache Beam and Google Dataflow
    * Apache Spark and Google Dataproc
    * Apache Kafka and Cloud Cloud
* [Lab 3 - Moving Data](Lab%203%20-%20Moving%20Data/README.md) (15 min)
    * A Day of Data
    * A Year of Data
* [Lab 4 - Exploration](Lab%204%20-%20Exploration/README.md) 10 min)
    * Exploration with Neo4j Bloom
* [Lab 5 - Vertex AI Workbench](Lab%205%20-%20Vertex%20AI%20Workbench/README.md) 15 min)
    * Pandas
    * Vertex AI Workbench
    * Cypher Queries
* Break (10 min)

### Part 3
* Lecture - [Graph Data Science](https://docs.google.com/presentation/d/133tXAH--V7Uvyd0Ylhs08_xDEPfl64uvaNNdxeHVpvk/edit?usp=sharing) (10 min)
    * Why Graph Data Science
    * Neo4j GDS
    * Algorithm Families and Examples
    * Similarity
    * Centrality
    * Community Detection
    * Graph Machine Learning
* [Lab 6 - Graph Data Science](Lab%206%20-%20Graph%20Data%20Science/README.md) (15 min)
    * Creating a Graph Embedding
    * Exporting to pandas
    * Writing to Google Cloud Storage
* Lecture - [Vertex AI](https://docs.google.com/presentation/d/19TewJE5YgESTmN9qW4MOtFP4m39uPhUaRXErkCzrdbE/edit?usp=sharing) (10 min)
    * What is Vertex AI?
    * Using Vertex AI with Neo4j
* [Lab 7 - Vertex AI AutoML](Lab%207%20-%20Vertex%20AI%20AutoML) (15 min)
    * Raw Data
    * Data with Embedding
* [Lab 8 - Cleanup](Lab%208%20-%20Cleanup) (5 min)
* [Discussion - Questions and Next Steps](Discussion%20-%20Questions%20and%20Next%20Steps.md) (5 min)
