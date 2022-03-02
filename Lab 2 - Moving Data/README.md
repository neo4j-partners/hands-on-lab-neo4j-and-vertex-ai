# Lab 2 - Moving Data
In this lab, we're going to take data from a Google Cloud Storage bucket and import it into Neo4j.  We'll use the load CSV command in the Neo4j Cypher query language to do this.

## Checking out what we have.
We're going to be working with two files: train.csv and test.csv.  As the names imply, one is intended to be a training data set for our ML algorithms and another a test dataset.  The files are publicly available here:

    https://storage.googleapis.com/neo4j-datasets/form13/train.csv
    https://storage.googleapis.com/neo4j-datasets/form13/test.csv

First off, it might be helpful to get an idea what the data looks like.  So, let's fire up a notebook and fiddle with it.  You can open the notebook [here](playing-around.ipynb).

## Import data into Neo4j

    LOAD CSV WITH HEADERS FROM 'https://storage.googleapis.com/neo4j-datasets/form13/train.csv' AS row
    MERGE (m:Manager {filingManager:row.filingManager})
    MERGE (c:Company {nameOfIssuer:row.nameOfIssuer, cusip:row.cusip})
    MERGE (m)-[r1:Owns {value:toInteger(row.value), shares:toInteger(row.shares), reportCalendarOrQuarter:row.reportCalendarOrQuarter, target:row.target}]->(c)

Start time 9:54pm...

To delete the contents of the database, you can run:

    MATCH (n)
    DETACH DELETE n;
