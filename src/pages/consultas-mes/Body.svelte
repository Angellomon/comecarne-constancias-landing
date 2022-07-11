<script>
  import EmailInput from "../../lib/components/inputs/EmailInput.svelte";
  import { consultaEmail } from "../../lib/consultas";
  import { email, isError, isInvalid } from "../../lib/stores";
  import { validateEmail } from "../../lib/validaciones";

  export let mes = "junio";

  const realizarConsulta = async () => {
    validateEmail($email);
    if ($isInvalid) return;
    await consultaEmail($email, mes);
  };
</script>

<section>
  <h3>Correo Electrónico</h3>
  <EmailInput on:submit={realizarConsulta} />
  {#if $isInvalid}
    <span class="error">Correo no válido</span>
  {/if}
  {#if $isError}
    <span class="error">
      Favor de ingresar el correo con el cual te registraste en el seminario de
      aduanas.
    </span>
  {/if}
  <span class="bottom">
    <p>
      Ingresa el correo electrónico con el cual te registraste al Seminario
      Interactivo de Aduanas 2021
    </p>
  </span>
</section>

<style>
  .error {
    color: red;
    text-align: center;
    margin-top: -1em;
    margin-bottom: 1em;
  }
  h3 {
    font-family: "Futura Condensed Extra Bold";
    color: white;
    text-align: center;
  }
  p {
    margin: 0;
    width: 100%;
    margin: 0;
    height: 1.2em;
    text-align: center;
  }
  p:after {
    content: "";
    display: inline-block;
    width: 100%;
    margin: 0;
  }
  section {
    display: flex;
    flex-direction: column;
    margin: 0 25vw 12em 25vw;
    color: white;
    font-family: "Futura Condensed Medium";
    font-size: 1.2em;
    min-height: 30vh;
  }
  /* b {
    font-family: "Futura Condensed Extra Bold";
    color: white;
    width: 100%;
  }
  .top {
    font-size: 1.1em;
    text-align: justify;
  } */
  .bottom {
    font-size: 1.3em;
    text-align: justify;
  }

  @media (max-width: 968px) {
    section {
      margin: 0 15vw 12em 15vw;
    }
    h3 {
      font-family: "Futura Condensed Extra Bold";
      color: white;
      text-align: center;
    }
    p {
      margin: 0;
      width: 100%;
      margin: 0;
      height: 1.2em;
      text-align: justify;
    }
    p:after {
      content: "";
      display: inline-block;
      width: 100%;
      margin: 0;
    }
  }
  @media (min-width: 1566px) {
    p {
      height: 1.2em;
    }
    p:after {
      content: "";
      display: inline-block;
      width: 100%;
      margin: 0;
    }
    section {
      margin: 0 35% 12em 35%;
    }
  }

  @media (max-width: 689px) {
    p {
      margin: 0;
      width: 100%;
      margin: 0;
      height: 3em;
      text-align: left;
    }
  }
  @media (max-width: 405px) {
    p {
      margin: 0;
      width: 100%;
      margin: 0;
      height: 4em;
      text-align: left;
    }
  }
</style>
