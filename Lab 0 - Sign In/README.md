# Lab 0 - Sign In
At the start of this lab, you should have received an information sheet. To begin, visit https://events.oneblink.ai and input the email you used to register for the lab, along with the event code (a 7-digit number) from the information sheet. Check the box to agree to the Terms and Conditions, and then click on Register.

![](images/ob_01.png)

Check your mailbox to get the OneBlink validation code, then copy the code.

![](images/ob_02.png)

Enter your email, the event code from the information sheet, and the validation code from your email, then click on the "Access Sandbox" button.

![](images/ob_03.png)

Once the entered information is validated, you will receive your own GCP and Neo4j accounts. Please refrain from sharing this account information with fellow attendees, as it is specifically assigned to you. Remember to save this information, as you will need it until the end of the lab. These accounts will be terminated by the end of the day.

## Improving the Labs
As you work through these labs, we'd really appreciate your feedback.  One way to help us improve is to open an issue by going [here](https://github.com/neo4j-partners/hands-on-lab-neo4j-and-vertex-ai/issues).  Outright bugs, usability suggestions, and general comments are all appreciated.  Pull requests are great too!

## Sign into Google Cloud
We're going to sign into a new Google Cloud account.  You may already have other Google accounts.  If you use Chrome, you might consider creating a new profile or using incognito mode for these exercises.  That's not mandatory though and other browsers work fine too.

Our next step is to open the Google Cloud console [here](https://console.cloud.google.com/). 
Note: It is highly recommended to open the Google console in [incognito mode](https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop) or [private browsing](https://en.wikipedia.org/wiki/Private_browsing) mode in order to avoid conflicts with other credentials in your browser's cache. 

If you have no other Google accounts, you'll see a menu as shown below.  Enter the email you were given for this lab in and click "NEXT."  In my case, the email was vibrant-tiger-7@oneblink.ai.

![](images/01.png)

Now enter the password you were given for this lab.

![](images/02.png)

You'll see a prompt about the new account.  This account is being managed by [OneBlink.AI](https://oneblink.ai/), a company Neo4j works with for training.  We ask that you use this account solely to complete the lab exercises.  Assuming that is acceptable to you, click "I understand."

![](images/03.png)

Check the box to agree to the terms and click "AGREE AND CONTINUE."

![](images/04.png)

We're now in a new Google Cloud account.  OneBlink.AI already created a project for us.  Click "Select a project" at the top.

![](images/05.png)

Click on "NO ORGANIZATION" at the top.

![](images/06.png)

Select the "oneblink.ai" organization.

![](images/07.png)

Click to select the project available to you.  In my case it was "vibrant-tiger-7."

Now you're all set, logged into a Google Cloud account with a project selected.

![](images/09.png)

In the next lab we'll deploy Neo4j.
