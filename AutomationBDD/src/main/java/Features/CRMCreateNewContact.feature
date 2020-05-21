Feature: Free CRM Create Contact

Scenario: Free CRM Create a New Contract

Given user is already on Login Page
When user enter username and password
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user clicks on New button
Then user enters contact details 
	| firstname | lastname | position |
	| Yukte     | Bhatia   | Manager  |
	| Bhavna    | Bhatia   | CEO      |
	| Sunita	| Bhatia   | Manager  |
	| Vinod 	| Bhatia   | President|
	
Then user moves to new contact page
Then user delete all contacts