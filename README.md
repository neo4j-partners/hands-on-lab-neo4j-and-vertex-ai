# hands-on-lab-neo4j-and-vertex-ai
Neo4j is the [leading graph database](https://neo4j.com/whitepapers/forrester-wave-graph-data-platforms/) vendor.  We’ve worked closely with GCP Engineering for years.  Our products, AuraDB and AuraDS are offered as managed services on GCP.  Neo4j Enterprise Edition, which includes Graph Database, Graph Data Science and Bloom is offered in the [Google Cloud Marketplace](https://console.cloud.google.com/marketplace/browse?q=neo4j).

This workshop is a hands of lab with Neo4j and Vertex AI.  The goal of this workshop is to give tangible experience working with both products on Google Cloud.  The data set we'll be using is from the SEC EDGAR database.  Specifically, the public filings of asset manages with $100m or more under management.  We'll use Neo4j to explore their holdings.  Then we'll use Vertex AI to predict which holdings they'll have next quarter.

## Venue
These workshops are organized onsite in a GCP office.

## Duration
3 hours.

## Agenda
* Introductions
* Lecture - [Introduction to Neo4j](https://docs.google.com/presentation/d/1WvPzs_JEh8uuKEAQGecH1rUd1NoRzqZIKc-hQkuBdXQ/edit?usp=sharing) (10 min)
    * What is Neo4j?
    * Customer use cases
    * How is it deployed and managed on GCP?
* [Lab 1 - Deploy Neo4j](Lab%201%20-%20Deploy%20Neo4j) (15 min)
    * Improving the Labs
    * Sign up for GCP
    * Deploying Neo4j AuraDB Professional through the Marketplace
    * Deploying Neo4j Enterprise Edition on IaaS
* [Lab 2 - Connect to Neo4j](Lab%202%20-%20Connect%20to%20Neo4j/README.md) (15 min)
    * Neo4j Browser
    * Neo4j Bloom
    * Interacting via Shell
* Break (10 min)
* Lecture - [Moving Data](https://docs.google.com/presentation/d/1O6Oy_GbDYYCvQanUyUCl30hQdSsy9kKL53Jgl23Nnsk/edit?usp=sharing) (10 min)
    * LOAD CSV
    * Apache Beam and Google Dataflow
    * Apache Spark and Google Dataproc
    * Apache Kafka and Cloud Cloud
* [Lab 3 - Moving Data](Lab%203%20-%20Moving%20Data/README.md) (15 min)
    * A Day of Data
    * A Year of Data
* Break (10 min)
* Lecture - [Graph Data Science](https://docs.google.com/presentation/d/133tXAH--V7Uvyd0Ylhs08_xDEPfl64uvaNNdxeHVpvk/edit?usp=sharing) (10 min)
    * Why Graph Data Science
    * Neo4j GDS Library and Catalog
    * Algorithm Families and Examples
    * Similarity
    * Centrality
    * Community Detection
    * Graph Machine Learning
* [Lab 4 - Exploring Data](Lab%204%20-%20Exploring%20Data/README.md) 15 min)
    * Pandas
    * Cypher Queries
    * Vizualization with Neo4j Bloom
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
* [Lab 7 - Cleanup](Lab%207%20-%20Cleanup) (Optional, 0 min)
* [Discussion - Questions and Next Steps](Discussion%20-%20Questions%20and%20Next%20Steps.md) (10 min)
