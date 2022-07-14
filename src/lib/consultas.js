import { isLoading, isError } from "./stores";
import axios from "axios";

const eventos = {
  "2022-aduanas-nuevo-laredo-tam": "6pb2p1l4uy",
  "2022-aduanas-colombia-nl": "f3p3swx1j6",
};

export const consultaEmail = async (email = "", evento = "junio") => {
  try {
    isError.update(() => false);
    isLoading.update(() => true);

    const res = await axios.get(
      `https://umbrella-constancias.herokuapp.com/pdf/${eventos[evento]}?correo=${email}`,
      // `http://localhost:5001/pdf/${eventos[evento]}?correo=${email}`,
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
      `CONSTANCIA DE PARTICIPACIÓN COMECARNE ${evento.toUpperCase()} 2021.pdf`
    ); //or any other extension
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.log("error");
    isError.update(() => true);
  } finally {
    isLoading.update(() => false);
  }
};
