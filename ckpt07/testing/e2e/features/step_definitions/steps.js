/* eslint-env detox/detox */
import { Given, When, Then } from '@cucumber/cucumber';
import { element } from 'detox';
import { DEFAULT_TIMEOUT } from '../constants';

Given('I launched the app', async () => {
  // do nothing
});
Given('I am on login screen', async () => {
  await waitFor(element(by.id('landing-screen')))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
  await element(by.id('login-button')).tap();
  await waitFor(element(by.id('login-screen')))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
});

// WHEN
When('I tap on {string}', async componentId => {
  await element(by.id(componentId)).tap();
});

When('I type {string} into {string}', async (value, componentId) => {
  await element(by.id(componentId)).typeText(value);
  await device.pressBack();
});

// THEN
Then('I should see {string}', async componentId => {
  await waitFor(element(by.id(componentId)))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
});

Then('I should be on {string}', async componentId => {
  await waitFor(element(by.id(componentId)))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
});