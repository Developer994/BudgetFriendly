# BudgetFriendly

### Overview

This app uses Handlebars, MySQL, Node, Express, and a Sequelizer to create a Budgetting App. I followed the MVC design pattern and Node to Query the route data for the app. Handlebars was used to generate all of my HTML.

- BudgetFriendly is a spending tracker app that lets users keep track of all their expenses and manage them.

- The App uses passport to security and login. Once user logs in the he can access all his monthly/three monthly and yearly transactions.

- The app will store every all user information in a database.

BudgetFriendly is deployed to Heroku : https://vast-beach-77916.herokuapp.com/

### Technologies Used:

- nodeJS
- Javascript
- Express
- Handlebars
- MySQL
- HTML
- Jquery
- CSS
- Sequelizer

### Instructions:

1. When the app first loads up, you will be introduced with the sliding pages : 

<img src="public/assets/images/Step1.1.JPG" alt="Step1.1Image">

<img src="public/assets/images/Step1.2.JPG" alt="Step1.2Image">

<img src="public/assets/images/Step1.3.JPG" alt="Step1.3Image">

2. As you can see on the 3rd page shown in the image above, there are two buttons: Login and Signup. When you click on the Login button, you will be taken to the login page:

<img src="public/assets/images/LoginPage.JPG" alt="LoginPageImage">

Here, you can log in to your existing account. If the Signup button was clicked on the third slide of the landing page, then you will be directed to the registering page:

<img src="public/assets/images/RegisteringPage.JPG" alt="SignupPageImage">

3. When you log in through the Login page, you will now be directed to your profile page. As you can see, some values were previously added to the table and is also shown on the pie chart:

<img src="public/assets/images/ProfilePage.JPG" alt="ProfilePageImage">

4. Basically, once the New Transaction button is clicked, the following modal will show up:

<img src="public/assets/images/Modal.JPG" alt="ModalImage">

There are 8 Categories: Utilities, Health, Housing, Grocery, Automotive, Enterntainment, Education and Misc. An amount can be entered into the amount box. If left empty, it will be considered as $0 as added in the image below for Utilities on August 3rd: 

<img src="public/assets/images/AmountZero.JPG" alt="AmountZeroImage">

5. Now, an amount of $350 is being added for housing: 

<img src="public/assets/images/Amount350.JPG" alt="Amount350Image">

6. Once the Add transaction button is clicked, the new table and chart will add the new amount:

<img src="public/assets/images/Amount350Table.JPG" alt="Amount350TableImage">

<img src="public/assets/images/Amount350Pie.JPG" alt="Amount350PieImage">

7. There are also three buttons for 1 month, 3 months and 1 year that will show you the transaction within this month, the last 3 months, and within the last year:

<img src="public/assets/images/YearAndMonthButtons.JPG" alt="YearAndMonthButtonsImage">



### Prerequisites:

Node.js - Download the latest version of Node https://nodejs.org/en/
