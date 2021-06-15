/* eslint-env detox/detox */
import { Given } from "@cucumber/cucumber";
import Users from "../testdata/common/users";

import { DEFAULT_TIMEOUT } from "../constants";

Given("I am on rooomSummary-screen with user {string}", async (user) => {
  await waitFor(element(by.id("landing-screen")))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
  await element(by.id("login-button")).tap();
  await waitFor(element(by.id("login-screen")))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);

  await waitFor(element(by.id("login-screen")))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);

  await element(by.id("email-input")).typeText(Users[user].email);
  await element(by.id("password-input")).typeText(Users[user].password);
  await device.pressBack();
  await element(by.id("login-button")).tap();

  //find room screen
  await waitFor(element(by.id("findRoom-screen"))).toBeVisible();
  await element(by.id("nbPeople-input")).typeText("10");
  await device.pressBack();
  await element(by.id("date-input")).typeText("20211010");
  await device.pressBack();
  await element(by.id("startTime-input")).typeText("0800");
  await device.pressBack();
  await element(by.id("endTime-input")).typeText("1000");
  await device.pressBack();
  await element(by.id("findRoom-button")).tap();

  //select room screen
  await waitFor(element(by.id("selectRoom-screen"))).toBeVisible();
  await element(by.id("roomItem-button")).atIndex(0).tap();

  //booking summary screen
  await waitFor(element(by.id("bookingSummary-screen"))).toBeVisible();
});
