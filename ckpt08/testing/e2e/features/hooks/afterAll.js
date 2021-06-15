import { AfterAll } from "@cucumber/cucumber";
import RoomService, { updateToken } from "../services/RoomService";
import UserService from "../services/UserService";
import Users from "../testdata/common/users";

AfterAll(async () => {
  await removeAllBooking();
});

const removeAllBooking = async () => {
  const loginRes = await UserService.login({
    email: Users.BOB.email,
    password: Users.BOB.password,
  });
  const token = loginRes.data.token;
  updateToken(token, Users.BOB.email);
  const bookingRes = await RoomService.getHistory();
  const histories = bookingRes.data;
  for (let i = 0; i < histories.length; i++) {
    const booking = histories[i];
    await RoomService.cancelBooking(booking.bookingId);
  }
};
