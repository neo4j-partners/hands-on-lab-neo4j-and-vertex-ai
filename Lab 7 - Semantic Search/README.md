# Semantic Search

In this module, you will learn about semantic search and how a knowledge graph in Neo4j, combined with text embeddings from Vertex AI, can be leveraged for fast and effective knowledge retrieval.  We will add text documents from 10K filings to our graph to demonstrate these capabilities. 


This module is broken into three notebooks.

1. __\[Optional\] Part 0: Text Embedding__:  Use Vertex AI text embedding service on 10K filings. This step takes a while (up to an hour) so we ran it ahead of time so we can move to later below parts with a copy of the embeddings.  We still encourage you to look through and use as a reference to see how text embedding works in Vertex AI. 

2. __Part 1: Load Documents with Embeddings into Neo4j__ Takes the embeddings from the previous step and loads them as `Document` nodes into Neo4j. 

3. __Part 2: Semantic Search__: Demonstrates knowledge retrieval with connected data (multiple hops from documents) using vector search and graph traversals in Cypher. 