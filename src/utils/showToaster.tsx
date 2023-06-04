/* eslint-disable react-hooks/rules-of-hooks */
import { toast } from "react-toastify";
import { removeLocalStorage } from "./appUtils";

export const showToasterError = (error: any) => {

  if (error?.statusCode == "401") {
    removeLocalStorage();
   window.location.href="/login"
  } else {
    toast.error(error?.message);
  }
};
