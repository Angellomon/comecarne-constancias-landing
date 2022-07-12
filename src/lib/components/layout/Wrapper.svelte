<script>
  export let direction = "row";
</script>

<div class={direction}>
  <slot />
</div>

<style>
  div {
    height: 100%;
    width: 100%;
    border: 4px solid white;

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
  }

  div.row {
    flex-direction: row;
  }

  div.column {
    flex-direction: column;
  }
</style>
