<script>
  import Boton from "./Boton.svelte";
</script>

<div class="botones-seleccion">
  <Boton path="consulta/junio" disabled={false}>JUNIO</Boton>
  <Boton path="consulta/julio" disabled={false}>JULIO</Boton>
  <Boton path="consulta/agosto" disabled={false}>AGOSTO</Boton>
  <!-- <Boton path="consulta/septiembre" disabled={true}>SEPTIEMBRE</Boton> -->
</div>

<style>
  .botones-seleccion {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
