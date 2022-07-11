<script>
  import Logo from "./Logo.svelte";
  import { logosFooter } from "../stores";
</script>

<div class="logos">
  {#each Object.entries($logosFooter) as logo}
    <Logo src={logo[1]} alt={logo[0]} />
  {/each}
</div>

<style>
  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
  }
</style>
