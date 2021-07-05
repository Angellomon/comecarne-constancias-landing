<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<main>
  <Router {routes} />
</main>

<style>
  @font-face {
    font-family: "Futura Condensed Extra Bold";
    src: url("/fonts/futura-condensed-extra-bold.otf");
  }
  @font-face {
    font-family: "Futura Condensed Medium";
    src: url("/fonts/futura-condensed-medium.otf");
  }
  main {
    max-width: 100%;
    overflow-x: hidden;
  }
</style>
