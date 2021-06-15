/* eslint-env detox/detox */
import { Given, Then } from '@cucumber/cucumber';
import { element } from 'detox';
import { DEFAULT_TIMEOUT } from '../constants';

Given('I launched the app', async () => {
  // do nothing
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