<script>
  import Boton from "./Boton.svelte";
</script>

<div class="botones-seleccion">
  <Boton path="consulta/junio">JUNIO</Boton>
  <Boton path="consulta/julio" disabled={true}>JULIO</Boton>
  <Boton path="consulta/agosto" disabled>AGOSTO</Boton>
  <Boton path="consulta/septiembre" disabled>SEPTIEMBRE</Boton>
</div>

<style>
  .botones-seleccion {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
