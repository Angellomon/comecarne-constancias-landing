<script>
  import Boton from "./Boton.svelte";
</script>

<div class="botones-seleccion">
  <Boton path="consulta/junio" disabled={false}>JUNIO</Boton>
  <Boton path="consulta/agosto" disabled={true}>AGOSTO</Boton>
  <Boton path="consulta/julio" disabled={true}>JULIO</Boton>
  <Boton path="consulta/septiembre" disabled={true}>SEPTIEMBRE</Boton>
</div>

<style>
  .botones-seleccion {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
