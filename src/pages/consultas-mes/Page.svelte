<script>
  import Body from "./Body.svelte";
  import Header from "./Header.svelte";

  export let params;

  export let currentRoute;
  console.log(currentRoute, params);
</script>

<div>
  <Header mes={currentRoute.namedParams.mes} />
  <Body />
</div>
