# Discussion - Questions and Next Steps
This section has some thoughts on future work, improvements and next steps.  Please feel free to [PR](https://github.com/neo4j-partners/hands-on-lab-neo4j-and-vertex-ai/pulls) your ideas and suggestions.

## Lab 0 - Signup for Google Cloud
To do

## Lab 1 - Deploy Neo4j
The lab deploys Neo4j AuraDS Professional through a deep integration in the Google Cloud Console [here](https://console.cloud.google.com/marketplace/product/endpoints/prod.n4gcp.neo4j.io).  There are many other ways to deploy Neo4j.  If AuraDS Professional doesn't meet your needs, we probably have a different approach that does.  The [Marketplace](https://console.cloud.google.com/marketplace/browse?q=neo4j) is a good place to look for more options.

## Lab 2 - Connect to Neo4j
There are currently some issues you may have noticed in accessing the Aura console directly versus a redirect from the Google Cloud Console.  We're working to improve that experience.

## Lab 3 - Parsing Data
To do

## Lab 4 - Moving Data
We used LOAD CSV to pull data in.  That is one of many ways.  Neo4j [Data Loader](https://data-importer.neo4j.io/) is another.  We're exploring incorporating it into this lab.

We're also working with Google on [Dataflow](https://cloud.google.com/dataflow) integration.  A [PR to Apache Beam](https://github.com/apache/beam/pull/15916) has already been accepted.  We're just working to get the templates that would wrap it together.

The Neo4j [Spark Connector](https://neo4j.com/docs/spark/current/) is another way to get data in.  We've been working with the Google [Dataproc](https://cloud.google.com/dataproc) team on some demos of that.  It works today but some walkthrough are in progress.

## Lab 5 - Exploration
This section of the lab could be expanded.  A data enrichment exercise might be really interesting.  We've been doing work with [EKG elsewhere](http://github.com/neo4j-partners/apevue-knowledge-graph) that could be relevant.

## Lab 6 - Chatbot
To do

## Lab 7 - Graph Data Science
With a novel data set combined with a novel approach to machine learning, there's enough material here for numerous business applications or academic papers.  Some areas that might be interesting to explore in the future follow...

The data set isn't normalized.  Between these large asset managers, it's quite likely they own a significant portion of the stock outstanding for certain issues.  So rather than measuring shares or value, a more powerful feature might be percentage of float outstanding.

That then leads to a question about what other data could be used to enrich this dataset.  You wouldn't have to go far to enrich it with data from other forms.  For instance, Form 4, consists of filings for high level executives and directors of companies.  We didn't use that data for this lab as it's not particularly connected, so the graphs were disparate.  However, if it were used in combination with the Form 13 data, it might give some pretty interesting graphs.

Other more traditional data could be used to enrich this dataset as well.  Shares outstanding was noted above.  There might well be interesting interactions between dates of filings like a 10-K or 10-Q and changes in asset manager holdings.

That then brings us to the supervised learning problem we explored today.  We looked at what we could compute from this dataset and decided to predict change in holdings over time.  There are many other things we could try to predict.  One obvious thing would be for a given asset manager, trying to predict what securities they will buy in the future based on the current holdings.  If you're in the broker dealer space, it would be pretty easy to introspect holdings and build a recommendation engine off of it.  Of course, one question there is whether you'd want to recommend similar holdings or something diffferent to diversify?

The projection we used consisted only of the nodes.  We could use node properties as well.  GDS currently supports only float valued properties.  But, we have both shares and value as fields we could have used there.  It also would have been easy enough to convert an identifier like CUSIP to a float but that probably wouldn't have much predictive value in the projection.

Regarding the embedding, that is one approach to creating features.  We also could have explored other algorithms like Nearest Neighbor to generate community features.

Some work on tuning the embedding would improve accuracy.  It is interesting that, even without tuning, the embedding provides more valuable features than either reportCalendarOrQuarter or cusip.

## Lab 8 - AutoML
Vertex AI is an amazing suite of products.  It's largely serverless.  The GUI is intuitive.  It takes almost all the infrastructure pain out of machine learning.  At the same time, it is very very new.  The console is constantly changing.  New features are often introduced with only a REST API.  The APIs change.

AutoML takes ~2.5 hours to run even with a 1 hour budget.  The nice part about using a SaaS like Vertex AI is that all this is going to improve without any need to manage upgrades, infrastructure, etc.

New features for batch prediction and forecasting were recently released.  We're exploring including those in future versions of this lab as they mature.

## Lab 9 - Cleanup
We should automate a lot of this.

## Next Steps
We hope you enjoyed these labs.  If you have any questions, feel free to reach out directly to any of us.  We'd love the opportunity to explore and support your use cases.
