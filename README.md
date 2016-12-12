# unity-selenium-testing

Git Repo Setup

1. Clone the repo
2. cd into the directory after cloning git

How To Setup: 

1. Install Nodejs
2. Install Selenium-Standalone Server
3. npm install selenium-standalone@latest -g
4. selenium-standalone install
5. npm install
6. ./node_modules/.bin/wdio config

A question interface pops up. It will help to create the config easy and fast. If you are not sure what to answer follow this answers:
Q: Where do you want to execute your tests?
A: On my local machine

Q: Which framework do you want to use?
A: mocha

Q: Shall I install the framework adapter for you?
A: Yes (just press enter)

Q: Where are your test specs located?
A: ./test/specs/*/.js (just press enter)

Q: Which reporter do you want to use?
A: dot (just press space and enter)

Q: Shall I install the reporter library for you?
A: Yes (just press enter)

Q: Do you want to add a service to your test setup?
A: none (just press enter, let’s skip this for simplicity)

Q: Level of logging verbosity:
A: silent (just press enter)

Q: In which directory should screenshots gets saved if a command fails?
A: ./errorShots/ (just press enter)

Q: What is the base url?
A: http://localhost (just press enter)

HOW TO RUN TESTS:
1. Open a new command prompt and cd into your directory again. type the following: selenium-standalone start
2. Open a new command prompt and cd into your directory again. Type the following: ./node_modules/.bin/wdio wdio.conf.js
