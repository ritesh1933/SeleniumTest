Feature: Free CRM Login Page

Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
When user enter "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser


Examples:
	| username | password |
	| ritesh_mohit007@hotmail.com | Tomtom$9987 | 
