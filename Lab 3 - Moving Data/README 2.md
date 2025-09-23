# Lab 3 - Importing Data

In this lab, we're going to take data from a Cloud Storage bucket and import it into Neo4j. There are a few different ways to do this. Let's import data from SEC EDGAR Form 13 filings into a Neo4j database using the data importer tool within the Neo4j Aura console.

## Introduction

The Neo4j Aura console offers a convenient data importer tool that allows you to import data from various sources, including CSV files, into your Neo4j database. This guide will walk you through the process of importing Form 13 data, which represents holdings of large asset managers.

### Graph Data Modeling Overview

Before diving into the import process, let's briefly touch on graph data modeling. Graph databases, like Neo4j, store data as nodes and relationships. In this example, we'll model:

* **Managers:** Entities that manage assets.
* **Companies:** Entities that are held as investments.
* **OWNS:** Relationships connecting Managers to Companies, representing ownership.

This structure allows us to easily query and analyze relationships between asset managers and their investments.

## About the Data

The dataset used in this guide comes from the U.S. Securities and Exchange Commission's (SEC) EDGAR database. Form 13 filings are quarterly reports that asset managers with over $100 million in assets under management (AUM) are required to submit, detailing their equity holdings. These filings are publicly available.

For this guide, we'll use pre-filtered Form 13 data that includes filings with over $10 million in value.

## Data Files

You will need the following files:

1.  **Neo4j Graph Data Model:** This JSON file defines the structure of your graph, specifying the nodes, relationships, and their properties.
    * Download from: [https://storage.googleapis.com/neo4j-datasets/hands-on-lab/neo4j_importer_model_sec-edgar-forms13.json](https://storage.googleapis.com/neo4j-datasets/hands-on-lab/neo4j_importer_model_sec-edgar-forms13.json)

2.  **Form 13 Data:** This CSV file contains the actual data to be imported.
    * Download from: [https://storage.googleapis.com/neo4j-datasets/hands-on-lab/form13-2023.csv](https://storage.googleapis.com/neo4j-datasets/hands-on-lab/form13-2023.csv)

## Import Instructions

1.  **Open Neo4j Aura Console:**
Follow these steps to import the data into your Neo4j Aura database. Lets' use the Import tool. 
    * In the data services section, click on "Import"
    * in the Import section, select the "Graph models" tab.
    * Click on the "New graph model" button.
![](images/01.png)
2. **Open Graph Model:**
    * Locate the "Run import" button in the top right corner and click the three dots next to it.
    * Select "Open model" from the menu.
    * Browse and select the `neo4j_importer_model_sec-edgar-forms13.json` file that you downloaded.
![](images/02.png)
![](images/03.png)
7.  **Review Graph Model:**
    * The graph model should now be displayed on the canvas in the middle of the screen.
![](images/04.png)
8.  **Inspect Nodes and Relationships:**
    * Click on the "Manager" node to view its properties and keys.
![](images/05.png)
    * Click on the "OWNS" relationship type to view its Node ID Mapping and properties.
![](images/06.png)
6.  **Select Data Source:**
    * On the left-hand side, next to "Data source," click the "Browse" button.
![](images/07.png)
    * Select the `form13-2023.csv` file that you downloaded.
![](images/08.png)
![](images/09.png)
9.  **Run Import:**
    * Click on "Run import."
![](images/10.png)
    * Wait for the import process to complete (approximately 5 minutes or less).
![](images/11.png)
![](images/12.png)

You've done it!  We've loaded our data set up.  We'll explore it in the next lab.  But, feel free to poke around a bit as well.
![](images/13.png)

#### Progress:  ███░░░░ 3/7 Labs Completed!
