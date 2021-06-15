/* eslint-env detox/detox */
import { Given } from "@cucumber/cucumber";
import Users from "../testdata/common/users";
import { DEFAULT_TIMEOUT } from "../constants";

Given("I am on findRoom-screen with user {string}", async (user) => {
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
  await device.pressBack();
  await element(by.id("password-input")).typeText(Users[user].password);
  await device.pressBack();
  await element(by.id("login-button")).tap();

  await waitFor(element(by.id("findRoom-screen"))).toBeVisible();
});
