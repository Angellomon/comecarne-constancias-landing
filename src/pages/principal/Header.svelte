<script>
  const cargamentos = "/img/cargamentos.png";
  const logoSeminario = "/img/logos/seminario.png";
</script>

<section>
  <img class="logo-seminario" src={logoSeminario} alt="logo-seminario" />
  <h1>CONSTANCIAS</h1>
  <img class="cargamentos" src={cargamentos} alt="cargamento" />
</section>

<style>
  section {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 30vh;

    background-color: var(--bg-light);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  h1 {
    font-size: 85px;
    text-align: center;
    font-family: "Futura Condensed Extra Bold";
  }
  .logo-seminario {
    max-height: 90%;
  }
  .cargamentos {
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
    .cargamentos {
      max-height: 15em;
    }
  }
</style>
