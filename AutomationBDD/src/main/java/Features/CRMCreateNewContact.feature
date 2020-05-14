Feature: Free CRM Create Contact

Scenario Outline: Free CRM Create a New Contract

Given user is already on Login Page
When user enter username and password
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user clicks on New button
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then user moves to new contact page
Then user moves to new contact page
Then user clicks on New button
Then user enters contact details "<firstname1>" and "<lastname1>" and "<position1>"
Then user moves to new contact page
Then user moves to new contact page
Then user delete all contacts
#Then close the browser


Examples:
	| firstname | lastname | position | firstname1 | lastname1 | position1 |
	| Yukte | bhatia | Manager | Bhavna | bhatia | Sales |
	
	