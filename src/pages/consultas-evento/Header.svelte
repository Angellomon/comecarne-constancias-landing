<script>
  import Title from "../../lib/components/Title.svelte";
  import Wrapper from "../../lib/components/layout/Wrapper.svelte";

  const logoSeminario = "/img/logos/seminario.png";
</script>

<section>
  <Wrapper direction="column">
    <div class="espacio-logo">
      <img class="logo-seminario" src={logoSeminario} alt="logo-seminario" />
    </div>
    <div class="wrap">
      <div class="titulo">
        <Title funnyCorners={false} tinyFont />
      </div>
    </div>
  </Wrapper>
</section>

<style>
  div.espacio-logo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 50vw;

    position: absolute;
    top: 5vh;
  }

  img.logo-seminario {
    max-height: 13em;
    max-width: 13em;

    z-index: 9000;
  }

  div.titulo {
    display: flex;
    justify-content: center;

    background-color: var(--color-secundario);

    border-bottom: 4px solid white;
    border-left: 4px solid white;
    border-right: 4px solid white;

    margin-bottom: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }

  div.wrap {
    width: 100%;

    position: absolute;
    bottom: 0;
    background-color: var(--color-secundario);
  }

  section {
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: transparent;
    background-image: url("/img/cargamentos.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    position: relative;
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
  }
  @media (min-width: 900px) {
    section {
      height: 45vh;
    }
  }
</style>
