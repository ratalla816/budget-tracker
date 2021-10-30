# Budget Tracker

  ![badge](https://img.shields.io/github/languages/top/ratalla816/budget-tracker)
  <br> 
  ![badge](https://img.shields.io/github/languages/count/ratalla816/budget-tracker)
  <br>
  ![badge](https://img.shields.io/github/issues/ratalla816/budget-tracker)
  <br>
  ![badge](https://img.shields.io/github/issues-closed/ratalla816/budget-tracker)
  <br>
  ![badge](https://img.shields.io/github/last-commit/ratalla816/budget-tracker)
  <br>
  ![badge](https://img.shields.io/badge/license-MIT-important)
  
  ## Description
  
   AS AN avid traveler
  I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
  SO THAT my account balance is accurate when I am traveling 
  GIVEN a budget tracker without an internet connection
  WHEN the user inputs an expense or deposit
  THEN they will receive a notification that they have added an expense or deposit
  WHEN the user reestablishes an internet connection
  THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
 
  ## Table of Contents
  - [Description](#description)
  - [Documentation](#documentation)
  - [Deployment](#deployment)
  - [Screenshot](#screenshot)
  - [Features](#features)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)
  - [Testing](#testing)
  - [Contact](#contact)

  ## Documentation
  * MongoDB Atlas <https://docs.atlas.mongodb.com/getting-started/>
  * Lite Server <https://www.npmjs.com/package/lite-server>
  * Express <https://www.npmjs.com/package/express/v/4.17.1>
  * Mongoose <https://www.npmjs.com/package/mongoose/v/5.5.15>
  * Morgan <https://www.npmjs.com/package/morgan>
  * Heroku <https://devcenter.heroku.com/>
 
  ## Deployment
  This app is deployed using Heroku <https://ratalla816-budget-tracker.herokuapp.com/>

  ## Screenshot
  ![Screenshot](assets/images/budgetvid.gif)

  ## Features
  * service worker
  * manifest.json
  * IndexedDB for offline persistence 
    
  # Acknowledgements
  Rob Atalla
    
  ## License
  ![badge](https://img.shields.io/badge/license-MIT-important)
  <br>
  Permission to use this application is granted under the MIT license. <https://opensource.org/licenses/MIT>


  ## Testing
  To test the persistence feature, please follow the steps below:
  * Navigate to <https://ratalla816-budget-tracker.herokuapp.com/> in your Chrome browser
  * Press F12 to open dev tools
  * Under the Network tab there is a tab at the bottom of the window called "network conditions", click that tab, 
  and in the "network throttling" option please select "offline" from the dropdown menu. If you need help, please reference the walkthrough below. 
  <br>
  ![Screenshot](assets/images/offlinevid.gif)
  <br>
  * Then proceed to the app and enter a couple transactions (see below)
  <br>
  ![Screenshot](assets/images/transactionvid.gif)
  <br>
  * Now update the network conditions drop down to "no throttling" and refresh your browser. If the indexed DB is working properly the transactions you entered should still be listed!
  <br>
  ![Screenshot](assets/images/successvid.gif)

  ## Contact:
  Holler at me! <a href="mailto:rob.atalla@robatalla816.com">rob.atalla@robatalla816.com</a>