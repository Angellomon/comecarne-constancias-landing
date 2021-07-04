<script>
  import logoSeminario from "../../assets/logo-seminario.png";
  import cargamento from "../../assets/cargamento.png";

  export let mes = "junio";

  const mesesPermitidos = ["junio", "julio", "agosto", "septiembre"];
</script>

{#if mesesPermitidos.includes(mes.toLowerCase())}
  <span>
    {mes}
  </span>
{:else}
  <span> no </span>
{/if}

<style>
  span {
    color: white;
  }
</style>
