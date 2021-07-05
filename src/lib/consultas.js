import { isLoading } from "./stores";

export const consultaEmail = () => {
  isLoading.update(() => true);
  return new Promise(() =>
    setTimeout(() => {
      console.log("fin");
      isLoading.update(() => false);
    }, 1000)
  );
};
