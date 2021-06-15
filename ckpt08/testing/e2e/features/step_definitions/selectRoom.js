/* eslint-env detox/detox */
import {Given, Then} from '@cucumber/cucumber';

Given('I am on find room screen', async () => {
  await waitFor(element(by.id('find-room-screen')))
    .toBeVisible()
    .withTimeout(10000);
});

Then('I should see the list of {string}', async componentId => {
  await waitFor(element(by.id(componentId))).toNotBeVisible();
});

Then('I should see a list of {string}', async componentId => {
  await waitFor(element(by.id(componentId)).atIndex(1))
    .toBeVisible()
    .withTimeout(10000);
});

Then('I should not see a list of {string}', async componentId => {
  await waitFor(element(by.id(componentId)).atIndex(1))
    .toBeNotVisible()
    .withTimeout(10000);
});
