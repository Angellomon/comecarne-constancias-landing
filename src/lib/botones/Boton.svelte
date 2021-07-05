<script>
  import { Navigate } from "svelte-router-spa";
  export let path;
  export const disabled = false;
</script>

<Navigate to={path}>
  <button disabled={true}><slot /></button>
</Navigate>

<style>
  button:hover {
    background-color: #d58020;
    cursor: pointer;
  }
  button {
    background-color: #f3a944;
    margin: 0.5em 0.5em;
    border-radius: 5px;
    border: none;
    padding: 0.3em 5em;
    color: white;
    font-family: "Futura Condensed Extra Bold";
    font-size: 1.1em;
    cursor: pointer;
  }
</style>
