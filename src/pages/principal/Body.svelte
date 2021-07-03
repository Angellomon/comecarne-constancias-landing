<script>
  import BotonesSeleccion from "../../lib/botones/BotonesMeses.svelte";
</script>

<section>
  <h1><strong>Indica</strong> a qué <strong>edición</strong> asististe:</h1>
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
    color: white;
  }
  strong {
    font-weight: bolder;
  }
</style>
