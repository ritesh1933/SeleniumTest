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
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@EndtoEndTest"
    }
  ]
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
  "duration": 2161008700,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 81\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-E9CDLT6\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x01115F73+2449267]\n\tOrdinal0 [0x01048361+1606497]\n\tOrdinal0 [0x00F3F969+522601]\n\tOrdinal0 [0x00ED05F3+67059]\n\tOrdinal0 [0x00ECCD92+52626]\n\tOrdinal0 [0x00EEC127+180519]\n\tOrdinal0 [0x00EEBF2D+180013]\n\tOrdinal0 [0x00EE9E5B+171611]\n\tOrdinal0 [0x00ED1DD8+73176]\n\tOrdinal0 [0x00ED2E50+77392]\n\tOrdinal0 [0x00ED2DE9+77289]\n\tOrdinal0 [0x0105D8D7+1693911]\n\tGetHandleVerifier [0x011B4036+522726]\n\tGetHandleVerifier [0x011B3D74+522020]\n\tGetHandleVerifier [0x011C9187+609079]\n\tGetHandleVerifier [0x011B48A6+524886]\n\tOrdinal0 [0x01055CBC+1662140]\n\tOrdinal0 [0x0105F23B+1700411]\n\tOrdinal0 [0x0105F3A3+1700771]\n\tOrdinal0 [0x01075215+1790485]\n\tBaseThreadInitThunk [0x755A6359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77037C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77037BF4+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat StepDefinition.CRMCreateNewContact.user_alderady_on_login_page(CRMCreateNewContact.java:26)\r\n\tat ✽.Given user is already on Login Page(C:/Users/rites/git/SeleniumTest/AutomationBDD/src/main/java/Features/CRMCreateNewContact.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CRMCreateNewContact.enter_username_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CRMCreateNewContact.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CRMCreateNewContact.user_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CRMCreateNewContact.click_Companies_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CRMCreateNewContact.click_on_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CRMCreateNewContact.enter_company_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
});