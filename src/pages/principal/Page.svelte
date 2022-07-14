<script>
  import Header from "./Header.svelte";
  import Body from "./Body.svelte";
  import Footer from "../../lib/components/layout/Footer.svelte";
  import Contenido from "../../lib/components/layout/Content.svelte";
</script>

<section>
  <Header />
  <Contenido>
    <Body />
  </Contenido>
  <Footer />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
</style>
