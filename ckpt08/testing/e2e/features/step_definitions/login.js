/* eslint-env detox/detox */
import detox from "detox";
import { Before } from "@cucumber/cucumber";
import UserService from "../services/UserService";

Before("@login-success", async () => {
  await UserService.signUp({
    firstName: "bob",
    lastName: "bob",
    email: "bob@bob.com",
    password: "bob",
  });
});

