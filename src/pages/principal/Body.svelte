<script>
  import { space } from "svelte/internal";
  import BotonesSeleccion from "../../lib/botones/BotonesMeses.svelte";
</script>

<section>
  <h1>
    <span class="enfasis">Indica</span> a qué
    <span class="enfasis">edición</span> asististe:
  </h1>
  <BotonesSeleccion />
</section>

<style>
  section {
    background-color: #0d070b;
    height: 50vh;
    display: flex;
    flex-direction: column;
  }
  h1 {
    text-align: center;
    font-size: 2.3rem;
    color: white;
    font-family: "Futura Condensed Medium";
  }
  .enfasis {
    font-family: "Futura Condensed Extra Bold";
  }
</style>
