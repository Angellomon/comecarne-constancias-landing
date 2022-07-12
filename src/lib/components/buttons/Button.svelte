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
    padding: 1em 1.5em;

    color: white;
    font-size: 1.1em;
    font-family: "Montserrat Semi Bold Italic";

    cursor: pointer;

    border: none;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  @media (min-width: 900px) {
    button {
      min-height: 3.5em;
    }
  }

  @media (min-width: 1800px) {
    button {
      min-height: 6.5em;
    }
  }
</style>
