<script>
  import Boton from "./Boton.svelte";
</script>

<div class="botones-seleccion">
  <Boton path="consulta/junio">JUNIO</Boton>
  <Boton path="consulta/julio">JULIO</Boton>
  <Boton path="consulta/agosto">AGOSTO</Boton>
  <Boton path="consulta/septiembre">SEPTIEMBRE</Boton>
</div>

<style>
  .botones-seleccion {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
