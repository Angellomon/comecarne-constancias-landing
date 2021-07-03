<script>
  import logoSeminario from "../../assets/logo-seminario.png";
  import cargamento from "../../assets/cargamento.png";
</script>

<section>
  <img class="logo-seminario" src={logoSeminario} alt="logo-seminario" />
  <h1>Constancias</h1>
  <img class="cargamento" src={cargamento} alt="cargamento" />
</section>

<style>
  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #dfa351;
    width: 100%;
    height: 30vh;
  }
  h1 {
    font-size: 60px;
    text-align: center;
  }
  .logo-seminario {
    max-height: 90%;
  }
  .cargamento {
    max-height: 100%;
  }
</style>
