$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GearProducts.feature");
formatter.feature({
  "line": 1,
  "name": "Gear Product Test",
  "description": "As a user I want to add product in shopping cart",
  "id": "gear-product-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3536046800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should add product to shopping cart successfully",
  "description": "",
  "id": "gear-product-test;user-should-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Gear menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Bag menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Night Duffle Bag",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify I am navigated to Bag page with \"Overnight Duffle\" text",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I change quantity \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on add to cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify bag added successfully with \"You added Overnight Duffle to your shopping cart.\" message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on shopping cart link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify product name \"Overnight Duffle\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify product quantity \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify product price \"$135.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I change quantity \"5\" on shopping page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on update cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify that cart is updated successfully with \"$225.00\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GearProductSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 60698100,
  "status": "passed"
});
formatter.match({
  "location": "GearProductSteps.iMouseHoverOnGearMenu()"
});
formatter.result({
  "duration": 665990800,
  "status": "passed"
});
formatter.match({
  "location": "GearProductSteps.iClickOnBagMenu()"
});
formatter.result({
  "duration": 1051080500,
  "status": "passed"
});
formatter.match({
  "location": "GearProductSteps.iClickOnNightDuffleBag()"
});
formatter.result({
  "duration": 955037200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overnight Duffle",
      "offset": 40
    }
  ],
  "location": "GearProductSteps.verifyIAmNavigatedToBagPageWithText(String)"
});
formatter.result({
  "duration": 92291500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "GearProductSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 120809300,
  "status": "passed"
});
formatter.match({
  "location": "GearProductSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 52218000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You added Overnight Duffle to your shopping cart.",
      "offset": 36
    }
  ],
  "location": "GearProductSteps.verifyBagAddedSuccessfullyWithMessage(String)"
});
formatter.result({
  "duration": 1784957100,
  "status": "passed"
});
formatter.match({
  "location": "GearProductSteps.iClickOnShoppingCartLink()"
});
formatter.result({
  "duration": 1997178800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overnight Duffle",
      "offset": 21
    }
  ],
  "location": "GearProductSteps.verifyProductName(String)"
});
formatter.result({
  "duration": 39718600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "GearProductSteps.verifyProductQuantity(String)"
});
formatter.result({
  "duration": 60533200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$135.00",
      "offset": 22
    }
  ],
  "location": "GearProductSteps.verifyProductPrice(String)"
});
formatter.result({
  "duration": 1351750700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "GearProductSteps.iChangeQuantityOnShoppingPage(String)"
});
formatter.result({
  "duration": 80547800,
  "status": "passed"
});
formatter.match({
  "location": "GearProductSteps.iClickOnUpdateCartButton()"
});
formatter.result({
  "duration": 45758300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$225.00",
      "offset": 47
    }
  ],
  "location": "GearProductSteps.verifyThatCartIsUpdatedSuccessfullyWith(String)"
});
formatter.result({
  "duration": 3701118000,
  "status": "passed"
});
formatter.after({
  "duration": 629762300,
  "status": "passed"
});
formatter.uri("MenProducts.feature");
formatter.feature({
  "line": 1,
  "name": "Men product test",
  "description": "As a User I want to add product in shopping cart",
  "id": "men-product-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2423693400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should add product successfully to shopping cart",
  "description": "",
  "id": "men-product-test;user-should-add-product-successfully-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Men menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on Men Bottom",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Pants menu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sort products by product name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on size of Cronos pant",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on black colour of Cronos pant",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Add to cart Button of Cronos pant",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify product added successfully message with \"You added Cronus Yoga Pant to your shopping cart.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on Shopping cart link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Verify Shopping cart is displayed with \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Verify Product name with \"Cronus Yoga Pant\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify Pant size with \"32\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify Colour of pant \"Black\"",
  "keyword": "And "
});
formatter.match({
  "location": "GearProductSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "location": "MenProductSteps.iMouseHoverOnMenMenu()"
});
formatter.result({
  "duration": 894430900,
  "status": "passed"
});
formatter.match({
  "location": "MenProductSteps.iMouseHoverOnMenBottom()"
});
formatter.result({
  "duration": 183115600,
  "status": "passed"
});
formatter.match({
  "location": "MenProductSteps.iClickOnPantsMenu()"
});
formatter.result({
  "duration": 21058374100,
  "status": "passed"
});
formatter.match({
  "location": "MenProductSteps.iSortProductsByProductName()"
});
formatter.result({
  "duration": 1537973400,
  "status": "passed"
});
formatter.match({
  "location": "MenProductSteps.iClickOnSizeOfCronosPant()"
});
formatter.result({
  "duration": 607768000,
  "status": "passed"
});
formatter.match({
  "location": "MenProductSteps.iClickOnBlackColourOfCronosPant()"
});
formatter.result({
  "duration": 58527000,
  "status": "passed"
});
formatter.match({
  "location": "MenProductSteps.iClickOnAddToCartButtonOfCronosPant()"
});
formatter.result({
  "duration": 222456100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You added Cronus Yoga Pant to your shopping cart.",
      "offset": 48
    }
  ],
  "location": "MenProductSteps.verifyProductAddedSuccessfullyMessageWith(String)"
});
formatter.result({
  "duration": 2870512400,
  "status": "passed"
});
formatter.match({
  "location": "MenProductSteps.iClickOnShoppingCartLink()"
});
formatter.result({
  "duration": 2346652900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 40
    }
  ],
  "location": "MenProductSteps.verifyShoppingCartIsDisplayedWith(String)"
});
formatter.result({
  "duration": 35440500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cronus Yoga Pant",
      "offset": 26
    }
  ],
  "location": "MenProductSteps.verifyProductNameWith(String)"
});
formatter.result({
  "duration": 35004000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 23
    }
  ],
  "location": "MenProductSteps.verifyPantSizeWith(String)"
});
formatter.result({
  "duration": 28611200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 23
    }
  ],
  "location": "MenProductSteps.verifyColourOfPant(String)"
});
formatter.result({
  "duration": 29463100,
  "status": "passed"
});
formatter.after({
  "duration": 662332700,
  "status": "passed"
});
formatter.uri("WomenProducts.feature");
formatter.feature({
  "line": 1,
  "name": "Women products Test",
  "description": "As a User I can sort products from Filter",
  "id": "women-products-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2809033600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that User can sort products by Product Name",
  "description": "",
  "id": "women-products-test;verify-that-user-can-sort-products-by-product-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on Women menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Top menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Jacket menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Product name from Drop down list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify that products are sorted by Product name",
  "keyword": "Then "
});
formatter.match({
  "location": "GearProductSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 39600,
  "status": "passed"
});
formatter.match({
  "location": "WomenProductSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 173930300,
  "status": "passed"
});
formatter.match({
  "location": "WomenProductSteps.iMouseHoverOnTopMenu()"
});
formatter.result({
  "duration": 25073249000,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b3beff7dc77e7f69d8c93aa495e55f74, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@69228e85]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\nikss\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59975}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59975/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b3beff7dc77e7f69d8c93aa495e55f74\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:362)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:68)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:258)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat com.softwaretestingboard.magneto.utility.Utility.mouseHoverToElement(Utility.java:231)\r\n\tat com.softwaretestingboard.magneto.pages.HomePage.mouseHoverOnWomenTopMenu(HomePage.java:40)\r\n\tat com.softwaretestingboard.magneto.steps.WomenProductSteps.iMouseHoverOnTopMenu(WomenProductSteps.java:20)\r\n\tat ✽.And I mouse hover on Top menu(WomenProducts.feature:7)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:303)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:40)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:258)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\t\tat com.softwaretestingboard.magneto.utility.Utility.mouseHoverToElement(Utility.java:231)\r\n\t\tat com.softwaretestingboard.magneto.pages.HomePage.mouseHoverOnWomenTopMenu(HomePage.java:40)\r\n\t\tat com.softwaretestingboard.magneto.steps.WomenProductSteps.iMouseHoverOnTopMenu(WomenProductSteps.java:20)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\t\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:358)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:68)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:258)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat com.softwaretestingboard.magneto.utility.Utility.mouseHoverToElement(Utility.java:231)\r\n\tat com.softwaretestingboard.magneto.pages.HomePage.mouseHoverOnWomenTopMenu(HomePage.java:40)\r\n\tat com.softwaretestingboard.magneto.steps.WomenProductSteps.iMouseHoverOnTopMenu(WomenProductSteps.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#\\/\\/a\\[\\@id\\\u003d\\\u0027ui\\-id\\-9\\\u0027\\]\"}\n  (Session info: chrome\u003d113.0.5672.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b3beff7dc77e7f69d8c93aa495e55f74, findElement {using\u003did, value\u003d//a[@id\u003d\u0027ui-id-9\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\nikss\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59975}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59975/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b3beff7dc77e7f69d8c93aa495e55f74\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:269)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:218)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:73)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:82)\r\n\t... 78 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomenProductSteps.iClickOnJacketMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenProductSteps.iSelectProductNameFromDropDownList()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenProductSteps.verifyThatProductsAreSortedByProductName()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 890054000,
  "status": "passed"
});
});