$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/rites/git/SeleniumTest/AutomationBDD/src/main/java/Features/CRMCreateNewContact.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM Create Contact",
  "description": "",
  "id": "free-crm-create-contact",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 33,
  "name": "User Create Company",
  "description": "",
  "id": "free-crm-create-contact;user-create-company",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks on Companies button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user enters Company details",
  "rows": [
    {
      "cells": [
        "Name",
        "Address",
        "City",
        "State",
        "ZipCode",
        "Country",
        "Phone"
      ],
      "line": 42
    },
    {
      "cells": [
        "Emerald Technologies",
        "25133 Sweet Mytle Sq",
        "Aldie",
        "VA",
        "20105",
        "United States",
        "571-230-8779"
      ],
      "line": 43
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CRMCreateNewContact.user_alderady_on_login_page()"
});
formatter.result({
  "duration": 8429891600,
  "status": "passed"
});
formatter.match({
  "location": "CRMCreateNewContact.enter_username_password()"
});
formatter.result({
  "duration": 362754900,
  "status": "passed"
});
formatter.match({
  "location": "CRMCreateNewContact.click_login_button()"
});
formatter.result({
  "duration": 134671900,
  "status": "passed"
});
formatter.match({
  "location": "CRMCreateNewContact.user_home_page()"
});
formatter.result({
  "duration": 2009369100,
  "status": "passed"
});
formatter.match({
  "location": "CRMCreateNewContact.click_Companies_button()"
});
formatter.result({
  "duration": 2138535100,
  "status": "passed"
});
formatter.match({
  "location": "CRMCreateNewContact.click_on_new_button()"
});
formatter.result({
  "duration": 2329747400,
  "status": "passed"
});
formatter.match({
  "location": "CRMCreateNewContact.enter_company_details(DataTable)"
});
formatter.result({
  "duration": 3683748800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@class\u003d\u0027search\u0027 and @value\u003d\u0027United States\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.138)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-E9CDLT6\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\rites\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65458}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 009b01c83615c8214667697ebd9897eb\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027search\u0027 and @value\u003d\u0027United States\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.CRMCreateNewContact.enter_company_details(CRMCreateNewContact.java:147)\r\n\tat ✽.Then user enters Company details(C:/Users/rites/git/SeleniumTest/AutomationBDD/src/main/java/Features/CRMCreateNewContact.feature:41)\r\n",
  "status": "failed"
});
});