<script>
  import EventsButtons from "../../lib/components/buttons/EventsButtons.svelte";
</script>

<section>
  <h1>Indica a qué <b>edición</b> asististe :</h1>
  <EventsButtons />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;

    background-color: var(--bg-light);
    background-image: url("/img/fondo-carne.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    margin-bottom: 1.5vh;
  }
  h1 {
    text-align: center;

    color: var(--color-font-black);
    font-family: "Montserrat Light";

    margin-bottom: 1.2em;
  }

  b {
    font-family: "Montserrat Bold";
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 1.5em;
    }

    section {
      min-height: 50vh;
    }
  }

  @media (min-width: 900px) and (max-width: 1368px) {
    h1 {
      font-size: 3em;
    }

    section {
      min-height: 45vh;
    }
  }

  @media (min-width: 1368px) {
    h1 {
      font-size: 3.5em;
    }

    section {
      min-height: 45vh;
    }
  }
</style>
