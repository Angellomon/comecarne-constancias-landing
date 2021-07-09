import { isLoading, isError } from "./stores";
import axios from "axios";

export const consultaEmail = async (email = "") => {
  try {
    isError.update(() => false)
    isLoading.update(() => true);

    const res = await axios.get(
      `https://umbrella-constancias.herokuapp.com/eventos/n00a6mvi7q/asistentes/buscar?correo=${email}`,
      {
        responseType: "blob",
      }
    );

    if (res.status !== 200) return;

    const url = window.URL.createObjectURL(new Blob([res.data]));
    // window.open(url);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      "CONSTANCIA DE PARTICIPACIÓN COMECARNE JUNIO 2021.pdf"
    ); //or any other extension
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.log("error");
    isError.update(() => true) 
  } finally {
    isLoading.update(() => false);
  }
};
