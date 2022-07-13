<div>
  <slot />
</div>

<style>
  div {
    height: 100%;
    width: 100%;
    border: 4px solid white;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
  }

  @media (max-width: 900px) {
    div {
      flex-direction: column;
    }
  }
</style>
