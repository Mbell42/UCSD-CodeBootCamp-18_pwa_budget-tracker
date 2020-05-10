# 18_pwa_budget-tracker

For this homework project, I will add functionality to a provided initial/existing Budget Tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget both with and without a connection. If the user enters transactions offline, then the transactions should populate the total when brought back online.

## Progress

### 2020.05.09_1300

Initial Commit.  I have created the github repository for the project, and then cloned it to my local repo.  I then imported the contents of the provided 'develop' folder into the project root directory.  I then added a '.gitignore' file to the project root directory.

### 2020.05.09_2130

I ran 'npm install', creating 'package-lock.json'.  Added 'minimist' to 'package.json' dependencies.  I then created 'manifest.webmanifest' and linked it to 'index.html'.  I then repaired font-awesome cdn link.

### 2020.05.09_2139

I corrected canvas size of provided icons to be square at described sizes using GIMP.  I then ran 'npm audit fix' in root directory to repair any vulnerabilities.

### 2020.05.09_2215

I added 'service-worker.js' to public folder, and then added script at the end of 'index.html' to, on load, check if service-workers are supported on the current browser, and based on the response, either register the service worker or throw an error, and log in the console that offline functionality will not be available.
