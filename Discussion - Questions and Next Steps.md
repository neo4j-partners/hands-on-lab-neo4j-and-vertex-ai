# Discussion - Questions and Next Steps

## Future Work
With a novel data set combined with a novel approach to machine learning, there's enough material here for numerous business applications or academic papers.  So areas that might be interesting to explore in the future follow...

The data set isn't normalized.  Between these large asset managers, it's quite likely they own a signifcant portion of the stock outstanding for certain issues.  So rather than measuring shares or value, a more powerful feature might be percentage of float outstanding.

That then leads to a question about what other data could be used to enrich this dataset.  You wouldn't have to go far to enrich it with data from other forms.  For instance, Form 4, consists of filings for high level executives and directors of companies.  We didn't use that data for this lab as it's not particularly connected, so the graphs were disparate.  However, if it were used in combination with the Form 13 data, it might give some pretty interesting graphs.

Other more traditional data could be used to enrich this dataset as well.  Shares outstanding was noted above.  There might well be interesting interactions between dates of filings like a 10-K or 10-Q and changes in asset manager holdings.

That then brings us to the supervised learning problem we explored today.  It's a bit of a [strapped chicken](https://sdiguy.blog/tag/strapped-down-chicken-test/).  We looked at what we could compute from this dataset and decided to predict change in holdings over time.  There are many other things we could try to predict.  One obvious thing would be for a given asset manager, trying to predict what securities they will buy in the future based on the current holdings.  If you're in the broker dealer space, it would be pretty easy to introspect holdings and build a recommendation engine off of it.  Of course, one question there is whether you'd want to recommend similar holdings or something diffferent to diversify?

## Next Steps
We hope you enjoyed these labs.  If you have any questions, feel free to reach out directly to any of us.  We'd love the opportuinity to explore and support your use cases.