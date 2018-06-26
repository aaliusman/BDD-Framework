$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/bravo1516/eclipse-workspace/StateFarmBDDPageObject/src/main/java/feature/statefarm.feature");
formatter.feature({
  "line": 1,
  "name": "Statefarm insurance quote",
  "description": "",
  "id": "statefarm-insurance-quote",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Get insurance quote",
  "description": "",
  "id": "statefarm-insurance-quote;get-insurance-quote",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user click on Agents tab",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"\u003czipcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Find Agent",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user select distance \"\u003cdistance\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user select product \"\u003cproductType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click search button",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "statefarm-insurance-quote;get-insurance-quote;",
  "rows": [
    {
      "cells": [
        "zipcode",
        "distance",
        "productType"
      ],
      "line": 12,
      "id": "statefarm-insurance-quote;get-insurance-quote;;1"
    },
    {
      "cells": [
        "19020",
        "Within 70 miles",
        "Auto"
      ],
      "line": 13,
      "id": "statefarm-insurance-quote;get-insurance-quote;;2"
    },
    {
      "cells": [
        "19047",
        "Within 80 miles",
        "Home"
      ],
      "line": 14,
      "id": "statefarm-insurance-quote;get-insurance-quote;;3"
    },
    {
      "cells": [
        "19120",
        "Within 90 miles",
        "Life"
      ],
      "line": 15,
      "id": "statefarm-insurance-quote;get-insurance-quote;;4"
    },
    {
      "cells": [
        "19020",
        "Within 70 miles",
        "Auto"
      ],
      "line": 16,
      "id": "statefarm-insurance-quote;get-insurance-quote;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19172446251,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get insurance quote",
  "description": "",
  "id": "statefarm-insurance-quote;get-insurance-quote;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user click on Agents tab",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"19020\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Find Agent",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user select distance \"Within 70 miles\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user select product \"Auto\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.clickAgent()"
});
formatter.result({
  "duration": 797352009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19020",
      "offset": 12
    }
  ],
  "location": "HomePage.enterZipCode(String)"
});
formatter.result({
  "duration": 89905931,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.clickFindAgent()"
});
formatter.result({
  "duration": 9938510218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 70 miles",
      "offset": 22
    }
  ],
  "location": "HomePage.selectWithinDistance(String)"
});
formatter.result({
  "duration": 2392402533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Auto",
      "offset": 21
    }
  ],
  "location": "HomePage.selectProductType(String)"
});
formatter.result({
  "duration": 346116292,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.clickSearchButton()"
});
formatter.result({
  "duration": 2421315067,
  "status": "passed"
});
formatter.after({
  "duration": 283184763,
  "status": "passed"
});
formatter.before({
  "duration": 10750331475,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get insurance quote",
  "description": "",
  "id": "statefarm-insurance-quote;get-insurance-quote;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user click on Agents tab",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"19047\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Find Agent",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user select distance \"Within 80 miles\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user select product \"Home\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.clickAgent()"
});
formatter.result({
  "duration": 1415177192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19047",
      "offset": 12
    }
  ],
  "location": "HomePage.enterZipCode(String)"
});
formatter.result({
  "duration": 222519390,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.clickFindAgent()"
});
formatter.result({
  "duration": 9644038900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 80 miles",
      "offset": 22
    }
  ],
  "location": "HomePage.selectWithinDistance(String)"
});
formatter.result({
  "duration": 2365380382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 21
    }
  ],
  "location": "HomePage.selectProductType(String)"
});
formatter.result({
  "duration": 323564395,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.clickSearchButton()"
});
formatter.result({
  "duration": 2374400453,
  "status": "passed"
});
formatter.after({
  "duration": 253094695,
  "status": "passed"
});
formatter.before({
  "duration": 3538818471,
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003dconnectionFailure\u0026u\u003dhttps%3A//www.statefarm.com/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dFirefox%20can%E2%80%99t%20establish%20a%20connection%20to%20the%20server%20at%20www.statefarm.com.\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Muhammads-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:c75:4170:8c99:7afc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/var/folders/5b/v141dsj14kj6hlqdjbpk72d40000gn/T/rust_mozprofile.PuGJjrQbCo6D, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dMAC, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d59.0.2, platformVersion\u003d17.5.0, moz:processID\u003d32611, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dMAC, moz:webdriverClick\u003dtrue}]\nSession ID: 2873c896-6339-ca48-9ec0-4fb166476961\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\n\tat stepDefinition.HomePage.initialize(HomePage.java:28)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:539)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:761)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:461)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:207)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Get insurance quote",
  "description": "",
  "id": "statefarm-insurance-quote;get-insurance-quote;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user click on Agents tab",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"19120\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Find Agent",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user select distance \"Within 90 miles\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user select product \"Life\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.clickAgent()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "19120",
      "offset": 12
    }
  ],
  "location": "HomePage.enterZipCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage.clickFindAgent()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 90 miles",
      "offset": 22
    }
  ],
  "location": "HomePage.selectWithinDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Life",
      "offset": 21
    }
  ],
  "location": "HomePage.selectProductType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage.clickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 118046273,
  "status": "passed"
});
formatter.before({
  "duration": 3206866109,
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003dconnectionFailure\u0026u\u003dhttps%3A//www.statefarm.com/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dFirefox%20can%E2%80%99t%20establish%20a%20connection%20to%20the%20server%20at%20www.statefarm.com.\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Muhammads-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:c75:4170:8c99:7afc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/var/folders/5b/v141dsj14kj6hlqdjbpk72d40000gn/T/rust_mozprofile.5g7ZRLkaQTlc, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dMAC, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d59.0.2, platformVersion\u003d17.5.0, moz:processID\u003d32616, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dMAC, moz:webdriverClick\u003dtrue}]\nSession ID: c28daa06-6a4e-e348-a0fd-edb7924c94e3\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\n\tat stepDefinition.HomePage.initialize(HomePage.java:28)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:539)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:761)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:461)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:207)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Get insurance quote",
  "description": "",
  "id": "statefarm-insurance-quote;get-insurance-quote;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user click on Agents tab",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"19020\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on Find Agent",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user select distance \"Within 70 miles\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user select product \"Auto\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.clickAgent()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "19020",
      "offset": 12
    }
  ],
  "location": "HomePage.enterZipCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage.clickFindAgent()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Within 70 miles",
      "offset": 22
    }
  ],
  "location": "HomePage.selectWithinDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Auto",
      "offset": 21
    }
  ],
  "location": "HomePage.selectProductType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage.clickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 270569820,
  "status": "passed"
});
});