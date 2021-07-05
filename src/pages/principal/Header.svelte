<script>
  import logoSeminario from "../../assets/logo-seminario.png";
  import cargamento from "../../assets/cargamento.png";
</script>

<section>
  <img class="logo-seminario" src={logoSeminario} alt="logo-seminario" />
  <h1>CONSTANCIAS</h1>
  <img class="cargamento" src={cargamento} alt="cargamento" />
</section>

<style>
  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f3a944;
    width: 100%;
    height: 30vh;
  }
  h1 {
    font-size: 85px;
    text-align: center;
    font-family: "Futura Condensed Extra Bold";
  }
  .logo-seminario {
    max-height: 90%;
  }
  .cargamento {
    max-height: 100%;
  }

  @media (max-width: 895px) {
    section {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .logo-seminario {
      max-height: 15em;
    }
    h1 {
      font-size: 50px;
      text-align: center;
      order: -1;
    }
    .cargamento {
      max-height: 15em;
    }
  }
</style>
