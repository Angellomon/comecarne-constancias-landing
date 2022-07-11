<script>
  import EventsButtons from "../../lib/components/buttons/EventsButtons.svelte";
</script>

<section>
  <h1>Indica a qué edición asististe:</h1>
  <EventsButtons />
</section>

<style>
  section {
    background-color: #0d070b;
    height: 100%;
    min-height: 57vh;
    display: flex;
    flex-direction: column;
  }
  h1 {
    text-align: center;
    font-size: 2.8rem;
    color: white;
    font-family: "Futura Condensed Medium";
    margin-bottom: 0.7em;
  }
</style>
