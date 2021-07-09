<script>
  import BotonesSeleccion from "../../lib/botones/BotonesMeses.svelte";
</script>

<section>
  <h1>Indica a qué edición asististe:</h1>
  <BotonesSeleccion />
</section>

<style>
  section {
    background-color: #0d070b;
    height: 100%;
    min-height: 57vh;
    display: flex;
    flex-direction: column;
  }
  h1 {
    text-align: center;
    font-size: 2.8rem;
    color: white;
    font-family: "Futura Condensed Medium";
    margin-bottom: 0.7em;
  }
  /* .enfasis {
    font-family: "Futura Condensed Extra Bold";
  } */
</style>
