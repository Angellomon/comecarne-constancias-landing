<script>
  import Header from "./Header.svelte";
  import Body from "./Body.svelte";
  import Footer from "../../lib/Footer.svelte";
  import Contenido from "../../lib/Contenido.svelte";

  export let currentRoute;
  console.log(currentRoute);
</script>

<section>
  <Header />
  <Contenido>
    <Body />
    <Footer />
  </Contenido>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
</style>
