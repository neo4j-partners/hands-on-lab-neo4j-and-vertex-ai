# Lab 7 - Semantic Search
In this lab, you will learn about semantic search and how a knowledge graph in Neo4j, combined with text embeddings from Vertex AI, can be leveraged for fast and effective knowledge retrieval.  We will add text documents from 10K filings to our graph to demonstrate these capabilities.

Step through these three notebooks in order to complete the lab.  Run them in Vertex AI Workbench as we did before.

1. [text_embedding.ipynb](text_embedding.ipynb) - Use Vertex AI text embedding service on 10K filings. This step takes a while (up to an hour) so we ran it ahead of time so we can move to later below parts with a copy of the embeddings.  We still encourage you to look through and use as a reference to see how text embedding works in Vertex AI. 

2. [graph_loading.ipynb](graph_loading.ipynb) - Takes the embeddings from the previous step and loads them as nodes of type doucment into Neo4j.

3. [semantic_search.ipynb](semantic_search.ipynb) - Demonstrates knowledge retrieval with connected data (multiple hops from documents) using vector search and graph traversals in Cypher.
