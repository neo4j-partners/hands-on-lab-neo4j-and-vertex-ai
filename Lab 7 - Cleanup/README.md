# Lab 7 - Cleanup
You can keep the resources you've deployed in these labs running as long as you like.  If you used a free trial, eventually the credits in your account will be exhausted and they'll be automatically shutdown.  Alternatively, you can delete them by following these instructions.

## Delete AuraDB Professional Database
If you deployed a SaaS instance you can delete it by logging into the console [here](https://console.neo4j.io/).  Then select delete database.

## Delete Deployment Manager Resources
If you deployed from the CLI using Deployment Manager, you can delete the deployment with Cloud Shell.  Open your Cloud Shell from the Google Cloud console [here](https://console.cloud.google.com/).  Then run this command:

    gcloud deployment-manager deployments delete neo4j

## Delete the Bucket
To delete the bucket we created, run the following command in Cloud Shell:

    gcloud alpha storage rm --recursive gs://YOUR_BUCKET_NAME

## Delete Vertex AI Resources
We created a variety of Vertex AI resoruces.  The API is not quite there for gcloud yet.  So, the easiest thing to do is probably just to login to the console [here](https://console.cloud.google.com/vertex-ai) and delete them manually.  You'll want to delete the following:

* [Datasets](https://console.cloud.google.com/vertex-ai/datasets)
* [Training Pipelines](https://console.cloud.google.com/vertex-ai/training/training-pipelines)
* [Models](https://console.cloud.google.com/vertex-ai/models)
