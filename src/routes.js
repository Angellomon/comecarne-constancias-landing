import PageSeleccion from "./pages/principal/Page.svelte";
import PageMes from "./pages/consultas-evento/Page.svelte";

const routes = [
  {
    name: "/",
    component: PageSeleccion,
  },
  {
    name: "/consulta/:mes",
    component: PageMes,
  },
];

export { routes };
