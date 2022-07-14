<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<main>
  <Router {routes} />
</main>

<style>
  @font-face {
    font-family: "Montserrat Regular";
    src: url("/fonts/montserrat-regular.ttf");
  }

  @font-face {
    font-family: "Montserrat Medium";
    src: url("/fonts/montserrat-medium.ttf");
  }

  @font-face {
    font-family: "Montserrat Thin";
    src: url("/fonts/montserrat-thin.ttf");
  }

  @font-face {
    font-family: "Montserrat Bold";
    src: url("/fonts/montserrat-bold.ttf");
  }

  @font-face {
    font-family: "Montserrat Bold Italic";
    src: url("/fonts/montserrat-bold-italic.ttf");
  }

  @font-face {
    font-family: "Montserrat Semi Bold";
    src: url("/fonts/montserrat-semi-bold.ttf");
  }

  @font-face {
    font-family: "Montserrat Semi Bold Italic";
    src: url("/fonts/montserrat-semi-bold-italic.ttf");
  }

  @font-face {
    font-family: "Montserrat Italic";
    src: url("/fonts/montserrat-italic.ttf");
  }

  @font-face {
    font-family: "Montserrat Light";
    src: url("/fonts/montserrat-light.ttf");
  }

  @font-face {
    font-family: "Montserrat Light Italic";
    src: url("/fonts/montserrat-light-italic.ttf");
  }

  :root {
    --color-principal: #14375d;
    --color-secundario: #9d1535;
    --color-font-black: #333;
    --color-font-white: #fff;
    --bg-light: #fff;
    --bg-dark: #333;
    font-family: "Montserrat Regular";
  }

  main {
    max-width: 100%;
    overflow-x: hidden;
  }
</style>
