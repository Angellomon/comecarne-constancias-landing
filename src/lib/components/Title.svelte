<script>
  export let funnyCorners = true;
  export let fontSize = "70px";
</script>

<div class:funnyCorners>
  <h1 style={`font-size:${fontSize};`}>CONSTANCIAS</h1>
</div>

<style>
  div {
    background-color: var(--color-secundario);
    border-top-right-radius: 5vh;
    border-bottom-left-radius: 5vh;

    padding: 1em 2em;
    height: 10vh;

    display: flex;
  }

  h1 {
    font-family: "Futura Medium Italic";
    color: white;

    align-self: center;
  }

  div.funnyCorners {
    border-top-right-radius: 5vh;
    border-bottom-left-radius: 5vh;
  }
</style>
