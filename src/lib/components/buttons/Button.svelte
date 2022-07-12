<script>
  import { Navigate } from "svelte-router-spa";
  export let path;
  export let disabled = false;
</script>

{#if !disabled}
  <Navigate to={path}>
    <button><slot /></button>
  </Navigate>
{:else}
  <button style="cursor: not-allowed;" disabled={true}><slot /></button>
{/if}

<style>
  button:hover {
    background-color: var(--color-secundario);
    cursor: pointer;
  }
  button {
    background-color: var(--color-principal);

    margin: 0.5em 0.5em;
    padding: 0.3em 1em;

    color: white;
    font-size: 1.1em;
    font-family: "Futura Condensed Extra Bold";

    cursor: pointer;

    border: none;
    border-top-right-radius: 5vh;
    border-bottom-left-radius: 5vh;
  }
</style>
