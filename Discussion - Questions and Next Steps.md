# Discussion - Questions and Next Steps
This section has some thoughts on future work, improvements and next steps.  Please feel free to [PR](https://github.com/neo4j-partners/hands-on-lab-neo4j-and-vertex-ai/pulls) your ideas and suggestions.

## Future Work - Lab 1 - Deploy Neo4j
Today we used AuraDB and a Deployment Manager template to deploy Neo4j EE.  AuraDS is going GA on GCP in a matter of days.  For people who want a SaaS solution, that's going to be preferable.  The GDS version we used, 2.0.0, was released 3/25.  An updated Google Marketplace listing should be coming in the next few days.  Deployment is rapidly improving.

## Future Work - Lab 3 - Moving Data
We used LOAD CSV to pull data in.  That is one of many ways.  Neo4j [Data Loader](https://data-importer.neo4j.io/) was recently released.  However it doesn't support compound keys on relationships, so we weren't able to use it.

We're also working with Google on [Dataflow](https://cloud.google.com/dataflow) integration.  A [PR to Apache Beam](https://github.com/apache/beam/pull/15916) has already been accepted.  We're just working to get the templates that would wrap it together.

The Neo4j [Spark Connector](https://neo4j.com/docs/spark/current/) is another way to get data in.  We've been working with the Google [Dataproc](https://cloud.google.com/dataproc) team on some demos of that.  It works today but some walkthrough are in progress.

## Future Work - Labs 5 - Graph Data Science
With a novel data set combined with a novel approach to machine learning, there's enough material here for numerous business applications or academic papers.  Some areas that might be interesting to explore in the future follow...

The data set isn't normalized.  Between these large asset managers, it's quite likely they own a signifcant portion of the stock outstanding for certain issues.  So rather than measuring shares or value, a more powerful feature might be percentage of float outstanding.

That then leads to a question about what other data could be used to enrich this dataset.  You wouldn't have to go far to enrich it with data from other forms.  For instance, Form 4, consists of filings for high level executives and directors of companies.  We didn't use that data for this lab as it's not particularly connected, so the graphs were disparate.  However, if it were used in combination with the Form 13 data, it might give some pretty interesting graphs.

Other more traditional data could be used to enrich this dataset as well.  Shares outstanding was noted above.  There might well be interesting interactions between dates of filings like a 10-K or 10-Q and changes in asset manager holdings.

That then brings us to the supervised learning problem we explored today.  We looked at what we could compute from this dataset and decided to predict change in holdings over time.  There are many other things we could try to predict.  One obvious thing would be for a given asset manager, trying to predict what securities they will buy in the future based on the current holdings.  If you're in the broker dealer space, it would be pretty easy to introspect holdings and build a recommendation engine off of it.  Of course, one question there is whether you'd want to recommend similar holdings or something diffferent to diversify?

The projection we used consisted only of the nodes.  We could use node properties as well.  GDS currently supports on float valued properties.  But, we have both shares and value as fields we could have used there.  It also would have been easy enough to convert an identifier like CUSIP to a float but that probably wouldn't have much predictive value in the projection.

Regarding the embedding, that is one approach to creating features.  We also could have explored other algorithms like Nearest Neighbor to generate community features.

## Future Work - Lab 6 - Vertex AI
Vertex AI is an amazing suite of products.  It's largely serverless.  The GUI is intuitive.  It takes almost all the infrastructure pain out of machine learning.  At the same time, it is very very new.  The console is constantly changing.  New features are often introduced with only a REST API.  The APIs change.

While we were working on this lab a number of changes like that happened.  There's a new batch prediction feature that's amazing and we worked into the very end of the lab.

At the same time, AutoML takes ~2 hours to run even with a 1 hour budget.  The nice part about using a SaaS like Vertex AI is that all this is going to improve without any need to manage upgrades, infrastructure, etc.

## Next Steps
We hope you enjoyed these labs.  If you have any questions, feel free to reach out directly to any of us.  We'd love the opportuinity to explore and support your use cases.