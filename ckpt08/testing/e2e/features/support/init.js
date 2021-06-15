import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import detox from "detox";
import config from "../../../.detoxrc.json";
import RoomService, { updateToken } from "../services/RoomService";
import UserService from "../services/UserService";
import Users from "../testdata/common/users";
import adapter from "./adapter";

BeforeAll(async () => {
  await detox.init(config);
});

Before(async (context) => {
  //always reinstall app when run a new scenario
  await detox.device.launchApp({ delete: true });
  await detox.device.reloadReactNative();
  await adapter.beforeEach(context);
});

After(async (context) => {
  await adapter.afterEach(context);
});

AfterAll(async () => {
  await detox.cleanup();
});

