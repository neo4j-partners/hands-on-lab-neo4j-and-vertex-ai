# hands-on-lab-neo4j-and-vertex-ai
Neo4j is the [leading graph database](https://neo4j.com/whitepapers/forrester-wave-graph-data-platforms/) vendor.  We’ve worked closely with GCP Engineering for years.  Our products, AuraDB and AuraDS are offered as managed services on GCP.

This workshop is a hands of lab with Neo4j and Vertex AI.  The goal of this workshop is to give tangible experience working with both products on Google Cloud.  The data set we'll be using is from the SEC EDGAR database.  Specifically, the public filings of asset manages with $100m or more under management.  We'll use Neo4j to explore their holdings.  Then we'll use Vertex AI to predict which holdings they'll have next quarter.

## Venue
These workshops are organized onsite in a GCP office.

## Duration
3 hours.

## Agenda
* Introductions
* Lecture - Introduction to Neo4j (20 min)
    * What is Neo4j?
    * Customer use cases
    * How is it deployed and managed on GCP?
* [Lab 1 - Deploy Neo4j](Lab%201%20-%20Deploy%20Neo4j) (20 min)
    * Deploying Neo4j AuraDB
    * Deploying Neo4j Enterprise Edition
* Break (10 min)
* Lecture - Neo4j and GCP (20 min)
    * Partnership overview
    * Integration points
* [Lab 2 - Moving Data](Lab%202%20-%20Moving%20Data) (20 min)
    * Import data into Neo4j
* [Lab 3 - Exploring Data](Lab%203%20-%20Exploring%20Data) (20 min)
    * Cypher Queries
    * Visualization with Bloom
* Break (10 min)
* Lecture - Graph Data Science (20 min)
    * Why Graph Data Science
    * Neo4j GDS Library and Catalog
    * Algorithm Families and Examples
    * Similarity
    * Centrality
    * Community Detection
    * Graph Machine Learning
* [Lab 4 - Graph Data Science](Lab%204%20-%20Graph%20Data%20Science) (20 min)
    * Unsupervised learning on graphs
    * Creating a graph embedding
    * Exporting to pandas
    * Writing to Google Cloud Storage
* Lecture - Vertex AI (20 min)
    * What is Vertex AI?
    * Using Vertex AI with Neo4j
* [Lab 5 - Vertex AI](Lab%205%20-%20Vertex%20AI) (20 min)
    * Importing to Vertex AI
    * Training a model
* [Discussion - Questions and Next Steps](Discussion%20-%20Questions%20and%20Next%20Steps.md) (10 min)
