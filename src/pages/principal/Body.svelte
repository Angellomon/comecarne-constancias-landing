<script>
  import EventsButtons from "../../lib/components/buttons/EventsButtons.svelte";
</script>

<section>
  <h1>Indica a qué <b>edición</b> asististe:</h1>
  <EventsButtons />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 40vh;

    background-color: var(--bg-light);
    background-image: url("/img/fondo-carne.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  h1 {
    text-align: center;
    font-size: 2.8rem;
    color: var(--color-font-black);
    font-family: "Futura Medium";
    margin-bottom: 0.7em;
  }
</style>
