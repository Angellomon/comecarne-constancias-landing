import { isLoading, isError } from "./stores";
import axios from "axios";

const eventos = {
  junio: "n00a6mvi7q",
  julio: "y1riuaamiu",
};

export const consultaEmail = async (email = "", evento = "junio") => {
  try {
    isError.update(() => false);
    isLoading.update(() => true);

    const res = await axios.get(
      `https://umbrella-constancias.herokuapp.com/eventos/${eventos[evento]}/asistentes/buscar?correo=${email}`,
      // `http://localhost:5001/eventos/${eventos[evento]}/asistentes/buscar?correo=${email}`,
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
