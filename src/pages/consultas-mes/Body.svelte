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
  <span
    ><b>Ingresa</b> el <b>correo electrónico</b> con el que te
    <b>registraste</b> al <b>Seminario Interactivo</b> de Aduanas
    <b>2021</b></span
  >
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
  section {
    display: flex;
    flex-direction: column;
    margin: 0 30vw 12em 30vw;
    color: white;
    font-family: "Futura Condensed Medium";
    font-size: 1.2em;
  }
  b {
    font-family: "Futura Condensed Extra Bold";
    color: white;
  }
  span {
    text-align: justify;
  }
  @media (max-width: 895px) {
    section {
      margin: 0 15vw 12em 15vw;
    }
  }
</style>
