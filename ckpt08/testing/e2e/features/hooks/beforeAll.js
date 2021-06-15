/* eslint-env detox/detox */
import { BeforeAll } from "@cucumber/cucumber";
import UserService from "../services/UserService";
import Users from "../testdata/common/users";

BeforeAll(async () => {
  await UserService.signUp(Users.BOB);
});
