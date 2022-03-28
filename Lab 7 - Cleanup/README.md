# Lab 7 - Cleanup
You can keep the resources you've deployed in these labs running as long as you like.  Eventually the credits in your account will be exhausted and they'll be automatically shutdown.  Alternatively, you can delete them by following these instructions.

## Delete AuraDB Professional Database
To delete the AuraDB Professional database, login to the console [here](https://console.neo4j.io/) and select delect database.

## Delete Deployment Manager Resources
Using Deployment Manager, we deployed a Neo4j cluster.  To delete it, run the following command in Cloud Shell.  You can open your Cloud Shell from the Google Cloud console [here](https://console.cloud.google.com/).

    gcloud deployment-manager deployments delete neo4j

## Delete the Bucket
To delete the bucket we created, run the following command

    gcloud alpha storage rm --recursive gs://YOUR_BUCKET_NAME

## Delete Vertex AI Resources
We created a variety of Vertex AI resoruces.  The API is not quite there for gcloud yet.  So, the easiest thing to do is probably just to login to the console [here](https://console.cloud.google.com/vertex-ai) and delete them manually.  You'll want to delete the following:

* [Datasets](https://console.cloud.google.com/vertex-ai/datasets)
* [Training Pipelines](https://console.cloud.google.com/vertex-ai/training/training-pipelines)
* [Models](https://console.cloud.google.com/vertex-ai/models)
