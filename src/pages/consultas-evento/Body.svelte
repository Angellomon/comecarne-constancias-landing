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
  <h2>Correo Electrónico</h2>

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
    <p class="linea-1">
      Ingresa el correo electrónico con el cual te registraste
    </p>

    <p class="linea-2">al Seminario Interactivo de Aduanas 2022</p>
  </span>
</section>

<style>
  h2 {
    font-family: "Montserrat Bold Italic";
    color: var(--color-font-black);
    text-align: center;
  }

  span.error {
    color: crimson;
    text-align: center;
    margin-top: 0.3em;
    margin-bottom: 1em;
  }

  p {
    margin: 0;
    height: 1.2em;
    text-align: center;
    color: var(--color-font-black);
  }

  p:after {
    content: "";
    display: inline-block;
    width: 100%;
    margin: 0;
  }

  p.linea-1 {
    font-size: 0.9em;
  }

  p.linea-2 {
    font-size: 1.2em;
    font-family: "Montserrat Medium";
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 0vh;
    /* margin: 0 25vw 12em 25vw; */

    min-height: 40vh;

    color: white;
    font-family: "Montserrat Regular";
    font-size: 1.2em;

    background-color: var(--bg-light);
    background-image: url("/img/fondo-carne.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  span.bottom {
    font-size: 1.3em;
    text-align: justify;

    margin-top: 3vh;
  }

  @media (min-width: 900px) {
    section {
    }
  }

  @media (max-width: 900px) {
    section {
    }

    p {
      height: 2.5em;
    }

    p.linea-1 {
      font-size: 0.7em;
    }

    p.linea-2 {
      font-size: 1.2em;
      font-family: "Montserrat Medium";
    }
  }
</style>
