<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<main>
  <Router {routes} />
</main>

<style>
  :root {
    --color-principal: #14375d;
    --color-secundario: #9d1535;
    --color-font-black: #333;
    --color-font-white: #fff;
    --bg-light: #fff;
    --bg-dark: #333;
  }
  @font-face {
    font-family: "Futura Condensed Extra Bold";
    src: url("/fonts/futura-condensed-extra-bold.otf");
  }
  @font-face {
    font-family: "Futura Condensed Medium";
    src: url("/fonts/futura-condensed-medium.otf");
  }
  @font-face {
    font-family: "Futura Condensed Bold";
    src: url("/fonts/futura-condensed-bold.ttf");
  }
  @font-face {
    font-family: "Futura Medium";
    src: url("/fonts/futura-medium.ttf");
  }
  @font-face {
    font-family: "Futura Medium Italic";
    src: url("/fonts/futura-medium-italic.ttf");
  }
  main {
    max-width: 100%;
    overflow-x: hidden;
  }
</style>
