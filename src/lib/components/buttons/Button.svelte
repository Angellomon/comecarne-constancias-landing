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
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  @media (max-height: 900px) {
    button {
      min-width: 70vw;
    }
  }

  @media (min-width: 900px) and (max-width: 1800px) {
    button {
      min-height: 5.7em;
      min-width: auto;

      border-top-right-radius: 35px;
      border-bottom-left-radius: 35px;
    }
  }

  @media (min-width: 1800px) {
    button {
      min-height: 6.5em;

      border-top-right-radius: 35px;
      border-bottom-left-radius: 35px;
    }
  }
</style>
