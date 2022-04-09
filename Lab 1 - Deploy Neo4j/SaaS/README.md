# SaaS
Aura is Neo4j's software as a service (SaaS) offering.  This is sometimes refered to as a database as a service (DBaaS) as well.  Aura comes in a number of flavors.  There's an enterprise and a professional version.  We're going to deploy the professional version.  

Aura also comes in a database (AuraDB) and a data science (AuraDS) version.  We're going to use AuraDS.

To get started, first navigate to the console [here](https://console.cloud.google.com/).  Then click the hamburger icon in the upper left to expand the menu.

![](images/06-console.png)

In that left menu, scroll down to the bottom.

![](images/07-console.png)

You'll see a listing for Neo4j.  Click on that.

![](images/08-console.png)

That takes you to a description of Neo4j AuraDB Professional.  Click on "Subscribe."

![](images/09-listing.png)

On the plan summary, review it and then scroll to the bottom.

![](images/10-plan.png)

Review the terms and accept them.  Then click "Subscribe."

![](images/11-plan.png)

You'll see a message that "Your order is now active."  Click "Go to product page."

![](images/12-plan.png)

We're now subscribed but need to enable the API.  Click on "Enable."

![](images/13-listing.png)

When complete you'll see this page.  Click on "Manage Via Neo4j, Inc." at the top of the page.

![](images/14-enabled.png)

Confirm that you're ok with getting redirected to the management console.

![](images/15-redirect.png)

You'll be asked which Google credentials you want to use.  Be sure to select the same credentials you've been using so far.

![](images/16-auth.png)

You'll need to agree to some terms and cookies.  Click "Got it" and "I agree."

![](images/17-terms.png)

And, now you're at the AuraDB console.  At this point, we've authorized the API and logged into the console for AuraDB Professional.  We can now create our first database.  Click on "Create a database."

![](images/18-terms.png)

We're presented with various options for that database.  We can accept the defaults here.  Scroll to the bottom.

![](images/19-create.png)

For database name, enter "form13."  Click "I understand."  Then click "Create Database."

![](images/20-create.png)

You'll be presented with the credentials for your database.  Be absolutely certain to write those down.  We can't get them again later and you'll need them in a later lab.  Once you've done that click "I have stored these credentials safely to use later." Then click "Continue."

![](images/21-creds.png)

You'll see a dialog that your database is being created.  This takes less than five minutes.

![](images/22-deploying.png)

When deployment is complete you'll see this menu.

![](images/23-deployed.png)

You can poke around the menus here a bit and see more on database status and connection information.
