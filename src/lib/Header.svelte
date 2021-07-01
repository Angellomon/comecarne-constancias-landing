<script>
  import logoSeminario from "../assets/logo-seminario.png";
  import cargamento from "../assets/cargamento.png";
</script>

<section>
  <img class="logo-seminario" src={logoSeminario} alt="logo-seminario" />
  <h1>Consatncias</h1>
  <img src={cargamento} alt="cargamento" />
</section>

<style>
  section {
    display: flex;
    justify-content: space-around;
    background-color: #dfa351;
    width: 100%;
    height: 30vh;
  }
  .logo-seminario {
    margin: 1em 0;
  }
</style>
