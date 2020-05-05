Feature: Free CRM Create Contact

Scenario Outline: Free CRM Create a New Contract

Given user is already on Login Page
When user enter "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user enters "<firstname>" and "<lastname>" and "<position>"
Then close the browser


Examples:
	| username | password | firstname | lastname | position |
	| ritesh_mohit007@hotmail.com | Tomtom$9987 | ritesh | bhatia | Manager |