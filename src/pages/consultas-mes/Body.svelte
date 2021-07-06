<script>
  import EmailInput from "../../lib/EmailInput.svelte";
  import { consultaEmail } from "../../lib/consultas";
  import { email } from "../../lib/stores";
  import { validateEmail } from "../../lib/validaciones";

  let isError = false;

  const realizarConsulta = async () => {
    isError = !validateEmail($email);
    if (isError) return;
    await consultaEmail();
  };
</script>

<section>
  <h3>Correo Electrónico</h3>
  <EmailInput on:submit={realizarConsulta} />
  {#if isError}
    <span class="error">Correo no válido</span>
  {/if}
  <span class="top">
    <p>
      <b>Ingresa</b> el <b>correo electrónico</b> con el cual te
      <b>registraste</b>
    </p>
  </span>
  <span class="bottom">
    <p>
      al <b>Seminario Interactivo</b> de Aduanas
      <b>2021</b>
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
    height: 2.9em;
  }
  section {
    display: flex;
    flex-direction: column;
    margin: 0 35% 12em 35%;
    color: white;
    font-family: "Futura Condensed Medium";
    font-size: 1.2em;
    height: 100%;
  }
  b {
    font-family: "Futura Condensed Extra Bold";
    color: white;
    width: 100%;
  }
  .top {
    font-size: 1.1em;
    text-align: justify;
  }
  .bottom {
    font-size: 1.3em;
    text-align: justify;
  }

  @media (max-width: 895px) {
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
