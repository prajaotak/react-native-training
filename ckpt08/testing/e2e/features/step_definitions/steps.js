/* eslint-env detox/detox */
import {element, expect} from 'detox';
import {Given, When, Then} from '@cucumber/cucumber';
import {DEFAULT_TIMEOUT} from '../constants';
import UserService from '../services/UserService';
import RoomService, {updateToken, removeToken} from '../services/RoomService';
import Users from "../testdata/common/users";

Given('I launched the app', async () => {
  // do nothing
});

Given('I am on landing screen', async () => {
  await waitFor(element(by.id('landing-screen')))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
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
Given('I am on my booking screen', async () => {
  await waitFor(element(by.id('find-room-screen')))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
  await element(by.id('myBookings-button')).tap();
  await waitFor(element(by.id('history-screen')))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
});

const logInViaUI = async (email, password) => {
  await waitFor(element(by.id('landing-screen')))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
  await element(by.id('login-button')).tap();
  await waitFor(element(by.id('login-screen')))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);

  await element(by.id('email-input')).typeText(email);
  await device.pressBack();
  await element(by.id('password-input')).typeText(password);
  await device.pressBack();
  await element(by.id('login-button')).tap();
};
Given(
  'I am logged in as {string} and I already have {int} bookings',
  async (alias, numberOfBooking) => {
    const user = Users[alias]
    // login first to get token
    const resp = await UserService.login({
      email: user.email,
      password: user.password
    });
    if (!numberOfBooking) {
      return;
    }
    updateToken(resp.data.token, user.email);

    // remove all previous bookings
    const bookingRes = await RoomService.getHistory();
    const histories = bookingRes.data;
    for (let i = 0; i < histories.length; i++) {
      const booking = histories[i];
      await RoomService.cancelBooking(booking.bookingId);
    }

    for (let i = 1; i <= numberOfBooking; i++) {
      await RoomService.bookRoom(
        4,
        `202111${i.toString().padStart(2, '0')}`,
        '0900',
        '1000',
        'ROOM_4_PEOPLE_1',
      );
    }
    removeToken();
    await logInViaUI(user.email, user.password);
  },
);
Given('I am logged in as {string}', async (alias) => {
  const user = Users[alias]
  await logInViaUI(user.email, user.password)
});
Given('I landed on find room screen', async () => {
  await waitFor(element(by.id('find-room-screen')))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
});

//WHEN
When('I tap on {string}', async componentId => {
  await element(by.id(componentId)).tap();
});

When('I tap on {string} at index {int}', async (componentId, index) => {
  await waitFor(element(by.id(componentId)).atIndex(0))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
  await element(by.id(componentId)).atIndex(index).tap();
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

Then('I should not see {string}', async componentId => {
  await expect(element(by.id(componentId))).toBeNotVisible();
});

Then('I should see list of {string}', async componentId => {
  await waitFor(element(by.id(componentId)).atIndex(0))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
});

Then('I should not see list of {string}', async componentId => {
  await expect(element(by.id(componentId)).atIndex(0)).toBeNotVisible();
});

Then(
  'I should see text {string} with value {string}',
  async (componentId, value) => {
    await waitFor(element(by.id(componentId)))
      .toHaveText(value)
      .withTimeout(DEFAULT_TIMEOUT);
  },
);

Then('I should be on {string}', async componentId => {
  await waitFor(element(by.id(componentId)))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
});
Then('I should see a list of {int} {string}', async (count, componentId) => {
  for (let i = 0; i < count; i++) {
    await waitFor(element(by.id(componentId)).atIndex(i))
      .toBeVisible()
      .withTimeout(DEFAULT_TIMEOUT);
  }
});
