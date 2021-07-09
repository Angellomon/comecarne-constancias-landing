import { isInvalid }  from "./stores"

export const validateEmail = (email = "") => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  let res = re.test(String(email).toLowerCase());
  isInvalid.update(() => !res)
  return res
};
