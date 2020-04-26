Feature: Login Action

Scenario Outline: Login into the amazon account

Given the user is on login page "<website>"
Then User enters emailid "<username>" and enters password "<password>"

Examples:
| username | password | website          |
| ritesh   | abc123   | https://www.facebook.com/ |
