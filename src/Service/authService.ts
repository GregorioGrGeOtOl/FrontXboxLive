import Api from "./api";
import swal from "sweetalert";
import { IUserSignIn, IUserSignUp } from "../types/interfaces";

export const loginService = {
  Login: async (values: IUserSignIn) => {
    try {
      const res = await Api.post("/auth", values);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};

export const RegisterService = {
  Register: async (values: IUserSignUp) => {
    try {
      const res = await Api.post("/user", values);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};


