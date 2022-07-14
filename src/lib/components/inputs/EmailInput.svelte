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
      if (value.keyCode == 13 || value.key == "Enter") submit();
    }}
    placeholder="correo@ejemplo.com"
    bind:value={$email}
    type="email"
  />
  <button on:click={submit}>
    {#if $isLoading}
      <Icon class="loading" icon={faSpinner} />
    {:else}
      <Icon class="submit" icon={faAngleRight} />
    {/if}
  </button>
</span>

<style>
  span {
    display: flex;
    justify-content: center;
    z-index: 99;
  }
  input {
    background-color: var(--color-principal);

    border: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;

    align-items: center;

    color: white;
    font-family: "Montserrat Light";
    font-weight: bold;
    font-size: 25px;
    padding: 0.5em;

    text-align: center;
    min-width: 3.3em;
    border-bottom-left-radius: 2vh;
  }

  input:focus-visible,
  input:active,
  input:focus,
  input:hover {
    border: none;
    outline: none;
  }

  button {
    background-color: var(--color-principal);

    cursor: pointer;
    font-size: 25px;

    margin-top: 0;
    margin-right: 1em;

    border: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;

    border-top-right-radius: 2vh;
  }
  button:active,
  button:focus,
  button:hover {
    color: var(--color-secundario);
  }

  button :global(.loading) {
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    color: white;
  }
  button :global(.submit) {
    margin-top: 0.2em;
    color: white;
    border: none;
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

  @media (max-width: 900px) {
    input {
      font-size: 20px;
    }

    span {
      width: 80vw;
    }
  }
</style>
