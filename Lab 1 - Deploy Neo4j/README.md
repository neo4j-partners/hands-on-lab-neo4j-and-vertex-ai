# Lab 1 - Deploy Neo4j
In this lab, we're going to do a little initial setup and then deploy Neo4j.

## Improving the Labs
As you work through these labs, we'd really appreciate your feedback.  One way to help us improve is to open an issue by going [here](https://github.com/neo4j-partners/hands-on-lab-neo4j-and-vertex-ai/issues).  Outright bugs, usability suggestions, and general comments are all appreciated.  Pull requests are great too!

## Enable APIs
Throughout these labs, we're going to use a number of APIs.  If you haven't already enabled them, login to each service and click "Enable API."

* [Deployment Manager](https://console.cloud.google.com/dm)
* [Compute Engine](https://console.cloud.google.com/compute)
* [Cloud Storage](https://console.cloud.google.com/storage)
* [Vertex AI](https://console.cloud.google.com/vertex-ai)

In the case of Compute Engine, the dialog looks like this:

![](images/01-compute.png)

## Deploy Neo4j with Google Deployment Manager on IaaS
We're going to deploy Neo4j on Infrastructure as a Service (IaaS).  We'll be using Neo4j Enterprise Edition.  That is the installable version of Neo4j.  The Marketplace listing has a Deployment Manager (DM) template that deploys Neo4j for you.  This has options to deploy Neo4j Graph Database, Neo4j Graph Data Science and Neo4j Bloom.  We're going to use the IaaS version for our exercises because it has all these additional features.

* Graph Database is, as the name implies, Neo4j's core database.  It's designed from the ground up to store graphs.  This comes in both a community and an enterprise version.  We're going to use the enterprise version.
* Graph Data Science (GDS) is the graph library that installs on top of the database.  It has implentations of 60 different graph algorithms.  We're going to use GDS to do things like create graph embeddings later in the labs.
* Bloom is a business intelligence tool.  We'll install it as well and use it to explore the data.

We're going to be using the absolute cutting edge, a new template that isn't available in the Marketplace yet.  The Marketplace is essentially a nice GUI around Deployment Manager.  So, what we're going to do is a little more raw and technical.

So, let's get started deploying...  To do so, let's go to the Google Cloud console [here](https://console.cloud.google.com/).  

We're going to use Cloud Shell as our CLI.  This is a CLI built into the console.  It's really nice because it's kept up to date automatically and your credentials are alreayd in it.  Click on the "Activate Cloud Shell" icon in the upper right of the console.

![](images/24-console.png)

If you're running cloud shell for the first time, you'll be presented with a dialog like this.  Just click "Continue."

![](images/25-shell.png)

Cloud Shell takes a few seconds to spin up.  When it's ready you'll see a terminal like this.  Click the "open in new window" button on the upper right of the Cloud Shell to expand it.

![](images/26-shell.png)

Now we have a nice full screen shell.  

![](images/27-shell.png)

Neo4j hosts our partner work in the Neo4j Partners GitHub org [here](https://github.com/neo4j-partners).  We're going to use the Deployment Manager repo [here](https://github.com/neo4j-partners/google-deployment-manager-neo4j).  To clone a copy to our Cloud Shell machine, run this command:

    git clone https://github.com/neo4j-partners/google-deployment-manager-neo4j.git

That should give you something like this:

![](images/28-shell.png)

Run a few more commands...

    clear
    ls
    cd google-deployment-manager-neo4j
    ls

![](images/29-shell.png)

We're now in the repo we cloned.  It has a README that describes the repo.  That's probably better view in a web browser [here](https://github.com/neo4j-partners/google-deployment-manager-neo4j) though.  The LICENSE file states this is Apache 2.0 licensed, so you're free to fork it and modify it to your heart's content.

Then there's a directory for Marketplace.  That's some GUI wrapper stuff written in jinja plus some helper scripts for packaging in marketplace.  That brings us to the simple directory.  Simple is the basic DM template.  Let's cd in there and list the contents.

    clear
    cd simple
    ls

![](images/30-shell.png)

deployment.py and cluster.py are Google Deployment Manager (DM) files.  This is Google Infrastructure as Code (IaC) language that automates deploying resources on Google Cloud Platform (GCP).  node.sh is a script that runs automatically in the DM template.

We're going to run the deploy.sh script.  That calls DM.  It takes two parameters, the name of a deployment and the name of a config file.  We're going to use the single parameters file, parameters.single.yaml.  This deploys a single node of Neo4j. 

Before we run it, we need to make one change.  We're going to be using two products that require license keys, Neo4j Bloom and Neo4j Graph Data Science.  You're going to need to open parameters.single.yaml in your favorite text editor, say vi.  Then you'll need to update the values of graphDataScienceLicenseKey and bloomLicenseKey to use these keys:

* graphDataScienceLicenseKey: eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlbkBuZW80ai5jb20iLCJleHAiOjE2NTIyNTI0MDAsImZlYXR1cmVWZXJzaW9uIjoiKiIsIm9yZyI6Ik5lbzRqIFRyYWluaW5nIiwicHViIjoibmVvNGouY29tIiwicXVhbnRpdHkiOiIxIiwicmVnIjoiQmVuIExhY2tleSIsInNjb3BlIjoiVHJpYWwiLCJzdWIiOiJuZW80ai1nZHMiLCJ2ZXIiOiIqIiwiaXNzIjoibmVvNGouY29tIiwibmJmIjoxNjQ5Njg1MzY4LCJpYXQiOjE2NDk2ODUzNjgsImp0aSI6IjkyOUcxa2psXyJ9.zbS3KAaiVuVwdplCcJbg3NBAx9D_QRT0Cc68hu9PIOTLbvi6H4c0vqWtXfd2GrwkRBvBA58yhJJrGicTu7SfHbHG8-BBmJLspVNvPT3YGaTCXZx4MwL7PgRm2XDnkOaHSbJTtO9qY5xUq7UxGcEUygqYxkPeydpyo0_lfNu6erGyL6lJaiTqnkeLFnanlZesrVF1bpmC2nOOl13PLQfG2Mi4J2l1VS9T2js8y_4lOS1Zb_OLPZxhc5i9-wqzHVYnIdQj_LpN-GeL8f61pmct0QNd-WEBl2EbWX4WQCMXt2HfMUX_fvTYbPvW16JDQ0Zm3IQTuT9v52xfb6lUwD1iNw
* bloomLicenseKey: eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlbkBuZW80ai5jb20iLCJleHAiOjE2NTIyNTI0MDAsImZlYXR1cmVWZXJzaW9uIjoiKiIsIm9yZyI6Ik5lbzRqIFRyYWluaW5nIiwicHViIjoibmVvNGouY29tIiwicXVhbnRpdHkiOiIxIiwicmVnIjoiQmVuIExhY2tleSIsInNjb3BlIjoiVHJpYWwiLCJzdWIiOiJuZW80ai1ibG9vbS1zZXJ2ZXIiLCJ2ZXIiOiIqIiwiaXNzIjoibmVvNGouY29tIiwibmJmIjoxNjQ5Njg1MzM4LCJpYXQiOjE2NDk2ODUzMzgsImp0aSI6IjBWZjZNOEUzcCJ9.y2BcqXyEb3xF70ZLiMOJA3scQvZKYKWkdlHXZBKRvCJ7XxmN8MZW0Pg_1DH7nu7V6PzIdf2_WYdvpYIvfx_fNkTZnFjTiWEd9ooyuNYU-AdUfotp59ikXkR14nBPh3R8bg3r-BHwRkzoqL3p1LljDCVCx0ulRD7Mty0nMiOthnfHyLaV0eWKEH8Mo74v1kcwQGwfMaHKn1AyZQ40VyJXTv6FAu4t-maVTSUDm-mXMAdIlVWRDAk8yO4wa6XjanIu9D7Ge_fSWloqijqTrjV0oSMQ0nyLNmGggmCHDUnOMzIrh3ESrbxKWwkTtQbgXX7yYticC_nGo29LW-lGaSXR4w

**IMPORTANT - Note that if you skip the license key step, Bloom will not run and Neo4j Graph Data Science will run in community mode which limits its functionality. This will limit your ability to complete later exercises.**

Ok... Let's run it and deploy Neo4j!

    clear
    ./deploy.sh neo4j single

If you've never run DM before, you may get a few messages asking you to authorize it.  Click "AUTHORIZE" and type "y."

![](images/31-auth.png)

![](images/32-auth.png)

The deployment takes a few minutes to run.  When complete, you'll see this:

![](images/37-deploy.png)

You now have a deployment of Neo4j running!  In the next lab, we'll connect to it.