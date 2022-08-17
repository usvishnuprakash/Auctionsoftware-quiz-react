import { atom } from "recoil";

export const auth = atom({
  key: "auth",
  default: {
    headers: {
      Authorization: 'Bearer {"userType":"guest"}',
      "Content-Type": "application/json",
    },
  },
});
export const data = {};
