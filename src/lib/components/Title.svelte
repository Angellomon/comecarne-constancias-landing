<script>
  export let funnyCorners = true;

  export let tinyFont = false;
</script>

<div class:funnyCorners>
  <h1 class:tinyFont>CONSTANCIAS</h1>
</div>

<style>
  div {
    background-color: var(--color-secundario);
    border-top-right-radius: 5vh;
    border-bottom-left-radius: 5vh;

    padding: 1em 2em;

    display: flex;
  }

  h1 {
    color: white;
    font-family: "Montserrat Bold Italic";

    align-self: center;
  }

  div.funnyCorners {
    border-top-right-radius: 5vh;
    border-bottom-left-radius: 5vh;
  }

  @media (min-width: 900px) {
    div {
      height: 10vh;
    }

    h1 {
      font-size: 5em;
    }

    h1.tinyFont {
      font-size: 4em;
    }
  }

  @media (min-width: 1366px) {
    div {
      height: 15vh;
    }

    h1 {
      font-size: 5em;
    }

    h1.tinyFont {
      font-size: 4em;
    }
  }

  @media (min-width: 1920px) {
  }
</style>
