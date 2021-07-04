import PageSeleccion from "./pages/principal/Page.svelte";
import PageMes from "./pages/consultas-mes/Page.svelte";

const routes = [
  {
    name: "/",
    component: PageSeleccion,
  },
  {
    name: "/:mes",
    component: PageMes,
  },
];

export { routes };
