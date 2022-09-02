<script>
  import Boton from "./Button.svelte";
</script>

<div class="botones-seleccion">
  <Boton path="consulta/2022-aduanas-colombia-nl" disabled={false}>
    <p class="first">21 y 22 de junio</p>
    <p class="second">COLOMBIA, NUEVO LEÓN</p>
  </Boton>

  <Boton path="consulta/2022-aduanas-nuevo-laredo-tam" disabled={false}>
    <p class="first">23 y 24 de junio</p>
    <p class="second">NUEVO LAREDO, TAMAULIPAS</p>
  </Boton>

  <Boton path="consulta/2022-julio" disabled={false}>
    <p class="first">12 al 15 de julio</p>
    <p class="julio">EDICIÓN VIRTUAL</p>
  </Boton>

  <Boton path="consulta/2022-agosto" disabled={false}>
    <p class="first">24 y 25 de agosto</p>
    <p class="julio">MANZANILLO, COLIMA</p>
  </Boton>

  <Boton path="consulta/2022-septiembre" disabled={false}>
    <p class="first">06 al 09 de septiembre</p>
    <p class="julio">EDICIÓN VIRTUAL</p>
  </Boton>
</div>

<style>
  div.botones-seleccion {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  p {
    color: white;
    font-family: "Montserrat Semi Bold Italic";
    margin: 0;
  }

  @media (max-width: 900px) {
    div.botones-seleccion {
      flex-direction: column;
    }

    p.first {
      font-size: 1.2em;
    }

    p.second {
      font-size: 0.7em;
    }

    p.julio {
      font-size: 1em;
    }
  }

  @media (min-width: 900px) and (max-width: 1800px) {
    div.botones-seleccion {
      flex-direction: row;
      max-width: 70vw;
    }

    p.first {
      font-size: 1.9em;
    }

    p.second {
      font-size: 1.2em;
    }

    p.julio {
      font-size: 1.5em;
    }
  }

  @media (min-width: 1800px) {
    div.botones-seleccion {
      flex-direction: row;
      max-width: 50vw;
    }

    p.first {
      font-size: 2.2em;
    }

    p.second {
      font-size: 1.5em;
    }

    p.julio {
      font-size: 1.9em;
    }
  }
</style>
