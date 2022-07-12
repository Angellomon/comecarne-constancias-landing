<script>
  import Body from "./Body.svelte";
  import Header from "./Header.svelte";
  import Contenido from "../../lib/components/layout/Content.svelte";
  import Footer from "../../lib/components/layout/Footer.svelte";

  export let currentRoute;
</script>

<div>
  <Header mes={currentRoute.namedParams.mes} />
  <Contenido>
    <Body mes={currentRoute.namedParams.mes} />
    <Footer />
  </Contenido>
</div>

<style>
  div {
    height: 100%;
  }
</style>
