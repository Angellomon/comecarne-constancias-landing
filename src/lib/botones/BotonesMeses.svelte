<script>
  import Boton from "./Boton.svelte";
</script>

<div class="botones-seleccion">
  <Boton path="/junio">JUNIO</Boton>
  <Boton path="/julio">JULIO</Boton>
  <Boton path="/agosto">AGOSTO</Boton>
  <Boton path="/septiembre">SEPTIEMBRE</Boton>
</div>

<style>
  .botones-seleccion {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
