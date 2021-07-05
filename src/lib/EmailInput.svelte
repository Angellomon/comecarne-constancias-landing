<script>
  // @ts-nocheck

  import { createEventDispatcher } from "svelte";
  import Icon from "fa-svelte";
  import { faAngleRight, faSpinner } from "@fortawesome/free-solid-svg-icons";

  const distatch = createEventDispatcher();
  export let loading = false;
  export let value;
  const submit = () => distatch("submit");
</script>

<span>
  <input placeholder="correo@ejemplo.com" bind:value type="email" />
  <button onclick={submit}>
    {#if loading}
      <Icon class="loading" icon={faSpinner} />
    {:else}
      <Icon icon={faAngleRight} />
    {/if}
  </button>
</span>

<style>
  span {
    display: flex;
    justify-content: center;
  }
  input {
    background-color: #f3a944;
    border: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    color: white;
    font-family: "Futura Condensed Medium";
    font-weight: bold;
    font-size: 25px;
    text-align: right;
    margin: 0 0 1em 1em;
    padding-right: 50px;
  }
  button {
    cursor: pointer;
    font-size: 25px;
    background-color: #f3a944;
    margin-top: 0;
    margin-right: 1em;
    margin-bottom: 1em;
    border: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  button:active,
  button:focus,
  button:hover {
    color: white;
  }

  button :global(.loading) {
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
