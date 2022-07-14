<script>
  import Title from "../../lib/components/Title.svelte";
  import Wrapper from "../../lib/components/layout/Wrapper.svelte";

  const logoSeminario = "/img/logos/seminario.png";
</script>

<section>
  <Wrapper>
    <img class="logo-seminario" src={logoSeminario} alt="logo-seminario" />
    <Title funnyCorners tinyFont={false} />
  </Wrapper>
</section>

<style>
  section {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 30vh;

    background-color: var(--bg-light);
    background-image: url("/img/cargamentos.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  img.logo-seminario {
    max-height: 90%;
  }

  @media (max-width: 900px) {
    section {
      display: flex;
      flex-direction: column;
      height: 30vh;
    }
    img.logo-seminario {
      max-height: 10em;
      max-width: 10em;
    }
  }
</style>
