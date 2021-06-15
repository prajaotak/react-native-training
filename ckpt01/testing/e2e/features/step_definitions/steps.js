/* eslint-env detox/detox */
import { Given, Then, When } from '@cucumber/cucumber';
import { element } from 'detox';
const DEFAULT_TIMEOUT = 10000;

Given('I launched the app', async () => {
  // do nothing
});

Given('I am on landing screen', async () => {
  await waitFor(element(by.id('landing-screen')))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
});

//WHEN
When('I tap on {string}', async componentId => {
  await element(by.id(componentId)).tap();
});


// THEN
Then('I should see {string}', async componentId => {
  await waitFor(element(by.id(componentId)))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
});
