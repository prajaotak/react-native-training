/* eslint-env detox/detox */
import { element } from "detox";
import { Given } from "@cucumber/cucumber";
import {DEFAULT_TIMEOUT} from '../constants'

Given("I am on sign up screen", async () => {
  await waitFor(element(by.id("landing-screen")))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
  await element(by.id("signUp-button")).tap();
  await waitFor(element(by.id("signUp-screen")))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);

});
