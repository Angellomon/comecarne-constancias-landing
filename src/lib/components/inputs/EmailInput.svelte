<script>
  // @ts-nocheck

  import { createEventDispatcher } from "svelte";
  import Icon from "fa-svelte";
  import { email, isLoading } from "../../stores";
  import { faAngleRight, faSpinner } from "@fortawesome/free-solid-svg-icons";

  const dispatch = createEventDispatcher();

  const submit = () => {
    dispatch("submit");
  };
</script>

<span>
  <input
    on:keydown={(value) => {
      if (value.key == "Enter" || value.keyCode == 13) submit();
    }}
    placeholder="correo@ejemplo.com"
    bind={$email}
    type="email"
  />
  <button on:click={submit}>
    {#if $isLoading}
      <Icon class="loading" icon={faSpinner} />
    {:else}
      <Icon lcass="submit" icon={faAngleRight} />
    {/if}
  </button>
</span>

<style>
  span {
    display: flex;
    justify-content: center;
    z-index: 99;
    margin-bottom: 1em;
    margin-left: 3vw;
    margin-right: 3vw;
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
    text-align: center;
    min-width: 3.3em;
    width: 100%;
  }
  button {
    cursor: pointer;
    font-size: 25px;
    background-color: #f3a944;
    margin-top: 0;
    margin-right: 1em;
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
  button :global(.submit) {
    margin-top: 1em;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 650px) {
    span {
      width: 70vw;
    }
    input {
      width: 70vw;
    }
  }
</style>
