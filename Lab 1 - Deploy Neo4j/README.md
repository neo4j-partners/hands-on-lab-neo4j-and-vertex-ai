# Lab 1 - Deploy Neo4j
In this lab, we're going to deploy Neo4j from the Google Cloud Marketplace.  We'll deploy two different ways.  The first is our Software as a Service (SaaS) or Database as a Service (DBaaS) offering, Neo4j AuraDB.  The second is a Neo4j IaaS listing.  That listing has a Deployment Manager template under it that we'll inspect.  We'll also look at more customizable deployment options.

## Sign up for GCP
The most basic thing you're going to need for these labs is a Google Cloud Platform (GCP) account.  If you don't have an account yet, you can sign up for one [here](https://console.cloud.google.com/).

You'll need to provide your phone number and credit card information.  New GCP accounts come with a $300 credit. Total costs for the lab should be significantly under $50. At the end of the lab we'll show you how to delete any resources you've deployed as well.

## Deploying Neo4j AuraDB through the Marketplace
asd

## Deploying Neo4j Enterprise Edition through the Marketplace
Alright, we're all read to deploy Neo4j!  To do so, let's go to the Google Cloud Marketplace.  We could go to the Marketplace and search.  But, instead, let's go directly to the listing for Neo4j Enterprise Edition.  That's [here](todo).

We'll be using Neo4j Enterprise Edition.  That is the installable version of Neo4j.  The Marketplace listing has a Deployment Manager (DM) template that deploys Neo4j for you.  This has options to deploy Neo4j Graph Database, Neo4j Graph Data Science and Neo4j Bloom.

Graph Database is, as the name implies, Neo4j's core database.  It's designed from the ground up to store graphs.  This comes in both a community and an enterprise version.  We're going to use the enterprise version.

Graph Data Science (GDS) is the graph library that installs on top of the database.  It has implentations of 60 different graph algorithms.  We're going to use GDS to do things like create graph embeddings later in the labs.

Bloom is a business intelligence tool.  We'll install it as well and use it to explore the data.

So, let's get started deploying...  Click on "Neo4j Enterprise Edition."

## Deployment Manager Template
In this lab we worked through deploying via the Marketplace.  The Marketplace is essentially a nice GUI around Deployment Manager.  If you're a more technical user and like deploying from the command line there are a variety of options.  These options are also useful if you'd like to modify the Deployment Manager template.

The place to start is the Neo4j Partners GitHub organziation.  That has a repo with the template from Marketplace as well as additional templates in it.  You can view that [here](https://github.com/neo4j-partners/google-deployment-manager-neo4j).
