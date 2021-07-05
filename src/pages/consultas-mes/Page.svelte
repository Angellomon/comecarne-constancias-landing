<script>
  import Body from "./Body.svelte";
  import Header from "./Header.svelte";
  import Contenido from "../../lib/Contenido.svelte";
  import Footer from "../../lib/Footer.svelte";

  export let currentRoute;
</script>

<div>
  <Header mes={currentRoute.namedParams.mes} />
  <Contenido>
    <Body />
    <Footer />
  </Contenido>
</div>
