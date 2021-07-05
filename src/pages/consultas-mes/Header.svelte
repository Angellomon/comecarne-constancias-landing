<script>
  import logoSeminario from "../../assets/logo-seminario.png";
  import cargamento from "../../assets/cargamento.png";
  export let mes = "junio";
</script>

<section>
  <div class="space" />
  <div class="titulo">
    <h1>CONSTANCIAS {mes.toUpperCase()}</h1>
    <img class="logo-seminario" src={logoSeminario} alt="logo-seminario" />
  </div>
  <div class="logo">
    <img class="cargamento" src={cargamento} alt="cargamento" />
  </div>
</section>

<style>
  .space {
    height: 10px;
    width: 18vw;
  }
  .titulo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3a944;
    width: 100vw;
    height: 35vh;
  }
  h1 {
    font-size: 3em;
    text-align: center;
    font-family: "Futura Condensed Extra Bold";
    margin: 0.5em 0 0.4em 0;
    padding: 0em 0;
  }
  .logo-seminario {
    max-height: 11em;
    max-width: 11em;
  }
  .cargamento {
    max-height: 35.5vh;
  }
  .logo {
    margin: 0;
    padding: 0;
    width: 18vw;
  }

  @media (max-width: 895px) {
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .logo-seminario {
      max-height: 200px;
      max-width: 200px;
      z-index: 1;
    }
    h1 {
      font-size: 45px;
      text-align: center;
      margin: 0em 0 0.4em 0;
      order: -1;
    }
    .cargamento {
      max-height: 15em;
      margin-top: -1.8em;
      z-index: 0;
    }
  }
  @media (min-width: 1387px) {
    h1 {
      font-size: 3.6em;
      text-align: center;
      font-family: "Futura Condensed Extra Bold";
      margin: -0.4em 0 0.4em 0;
      padding: 0em 0;
    }
  }
</style>
