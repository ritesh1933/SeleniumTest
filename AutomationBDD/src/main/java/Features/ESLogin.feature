Feature: Login Action

Scenario Outline: Login into the Everest Successor

Given the user is on login page "<website>"
Then User enters emailid "<username>" and enters password "<password>"
When the user clicks on Bureau Dashboard button
Then the user clicks on “New Package” button
And the user fills all required details on the new package screen
And user click on the “Save” button 
And user clicks on “Edit” button 
And user selects the caption from the list 
And user clicks on “Save” button 
Then Package should be created 
 

Examples:
| username | password | website                   |
| RITESH_MOHIT007@HOTMAIL.COM   | Nilani%757   | http://ec2-52-222-25-172.us-gov-west-1.compute.amazonaws.com/ |
