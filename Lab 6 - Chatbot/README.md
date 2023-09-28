# Lab 6 - Chatbot
In this lab, we'll build a chatbot.  The chatbot interface will use gradio.  Underlying the chatbot is the Neo4j knowledge graph we built in previous labs.  The chatbot uses generative AI and langchain.  We take a natural language question, convert it to Neo4j Cypher using generative AI and run that against the database.  We take the response from the database and use generative AI again to convert that back to natural language before presenting it to the user.

So, let's open up the notebook in our Vertex AI Workbench instance, as we did in the previous lab.  The notebook we want to open is [chatbot.ipynb](chatbot.ipynb).
