$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/rites/eclipse-workspace/AutomationBDD/src/main/java/Features/ESLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login into the Everest Successor",
  "description": "",
  "id": "login-action;login-into-the-everest-successor",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user is on login page \"\u003cwebsite\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "comments": [
    {
      "line": 6,
      "value": "# Then User enters emailid \"\u003cusername\u003e\" and enters password \"\u003cpassword\u003e\""
    }
  ],
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-action;login-into-the-everest-successor;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "website"
      ],
      "line": 10,
      "id": "login-action;login-into-the-everest-successor;;1"
    },
    {
      "cells": [
        "RITESH_MOHIT007@HOTMAIL.COM",
        "Nilani%757",
        "https://www.auction.com/"
      ],
      "line": 11,
      "id": "login-action;login-into-the-everest-successor;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login into the Everest Successor",
  "description": "",
  "id": "login-action;login-into-the-everest-successor;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user is on login page \"https://www.auction.com/\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.auction.com/",
      "offset": 27
    }
  ],
  "location": "JavaStepDefinition.user_on_login_page(String)"
});
formatter.result({
  "duration": 7007387500,
  "status": "passed"
});
});