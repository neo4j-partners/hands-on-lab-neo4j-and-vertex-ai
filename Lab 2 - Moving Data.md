# Lab 2 - Moving Data
asd

## Checking out what we have.
So, we're starting with two files: train.csv and test.csv.  In a python3 console, run:

    import pandas as pd
    pd.read_csv('train.csv')
    pd['target'].describe()

## Import data into Neo4j

    LOAD CSV WITH HEADERS FROM 'https://storage.googleapis.com/neo4j-datasets/form13/train.csv' AS row
    MERGE (m:Manager {filingManager:row.filingManager})
    MERGE (c:Company {nameOfIssuer:row.nameOfIssuer, cusip:row.cusip})
    MERGE (m)-[r1:Owns {value:toInteger(row.value), shares:toInteger(row.shares), reportCalendarOrQuarter:row.reportCalendarOrQuarter, target:row.target}]->(c)

Start time 9:54pm...

To delete the contents of the database, you can run:

    MATCH (n)
    DETACH DELETE n;
