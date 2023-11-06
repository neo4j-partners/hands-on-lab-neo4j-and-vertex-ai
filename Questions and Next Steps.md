# Questions and Next Steps
This section has some thoughts on future work, improvements and next steps.  Known issues are [here](https://github.com/neo4j-partners/hands-on-lab-neo4j-and-vertex-ai/issues).  Please feel free to [PR](https://github.com/neo4j-partners/hands-on-lab-neo4j-and-vertex-ai/pulls) your ideas and suggestions.

## Lab 0 - Sign Up
In previous versions of the lab we had users sign up for a free trial that they owned.  That was kinda cool in that attendees got to see everything start from scratch.  However, the signup required a credit card number and a phone number for identity verification.  It was also a fair bit of work.  Now we're using [OneBlink.AI](https://oneblink.ai/) to provision.  We'd be curious to hear how your experience was with this approach.

## Lab 1 - Deploy Neo4j
The lab deploys Neo4j AuraDS Professional through a deep integration in the Google Cloud Console [here](https://console.cloud.google.com/marketplace/product/endpoints/prod.n4gcp.neo4j.io).  There are many other ways to deploy Neo4j.  If AuraDS Professional doesn't meet your needs, we probably have a different approach that does.  The [Marketplace](https://console.cloud.google.com/marketplace/browse?filter=partner:Neo4j) is a good place to look for more options.

## Lab 2 - Connect to Neo4j
There are currently some issues you may have noticed in accessing the Aura console directly versus a redirect from the Google Cloud Console.  That's referred to as the punch out in Google Cloud Marketplace.  We're working to improve that experience.

## Lab 3 - Moving Data
We used LOAD CSV to pull data in.  That is one of many ways.  Neo4j Data Importer is another.  You may have noticed the tab for that in Aura.  We're exploring incorporating it into this lab.

We're also working with Google on [Dataflow](https://cloud.google.com/dataflow) integration.  A template is [here](https://github.com/GoogleCloudPlatform/DataflowTemplates/tree/main/v2/googlecloud-to-neo4j).  Additionally, you can check out a demo video [here](https://www.youtube.com/watch?v=9dAnPoFV80c).

The Neo4j [Spark Connector](https://neo4j.com/docs/spark/current/) is another way to get data in.  We've been working with the Google [Dataproc](https://cloud.google.com/dataproc) team on some demos of that.  It works today but some walkthrough are in progress.

## Lab 4 - Exploration
This section of the lab could be expanded.

## Lab 5 - Parsing Data
We only parse 3 files here.  That's down to very limited quotas.  With more, we could make a bunch of parallel calls.  It'd be neat to get to that point and parse all the data that way rather than with LOAD CSV.

## Lab 6 - Chatbot
The chatbot is somewhat brittle.  More work could be done to improve it.  You can almost certainly think up some questions that it should answer but can't.  That's part of what is so exciting about this space -- everything is developing quickly.

## Lab 7 - Sematic Search
The account we're using has limited quotas.  That forced us to throttle.

## Next Steps
We hope you enjoyed these labs.  If you have any questions, feel free to reach out directly to any of us.  We'd love the opportunity to explore and support your use cases with your data.
