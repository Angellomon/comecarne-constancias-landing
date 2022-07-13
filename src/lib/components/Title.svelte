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

    padding: 1em 2em;

    display: flex;
  }

  h1 {
    color: white;
    font-family: "Montserrat Bold Italic";

    align-self: center;
  }

  div.funnyCorners {
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
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

  @media (max-width: 900px) {
    div {
      height: 3vh;

      margin-top: -20px;

      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    h1 {
      font-size: 2em;
    }
  }

  @media (min-width: 900px) and (max-width: 1300px) {
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

  @media (max-width: 1300px) and (min-width: 1300px) {
    div {
      height: 15vh;
    }

    h1 {
      font-size: 6em;
    }

    h1.tinyFont {
      font-size: 4em;
    }
  }
</style>
