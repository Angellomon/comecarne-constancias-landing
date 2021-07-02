<script>
  import BotonesSeleccion from "../../lib/botones/BotonesMeses.svelte";
</script>

<section>
  <h1>Indica a qué edición asististe:</h1>
  <BotonesSeleccion />
</section>

<style>
  section {
    background-color: #13161c;
    height: 50vh;
    display: flex;
    flex-direction: column;
  }
  h1 {
    text-align: center;
    font-size: 25px;
  }
</style>
