<script>
  import Movies from "./Movies.svelte";
  import { darkmode } from "$stores/store";
  var mostrar=false
  function handleClick(e) {
    mostrar=true;
  }
</script>

<footer class={$darkmode ? "darkmode" : ""}>
  <!--<Movies/>-->
  <button on:click={handleClick}>Todas las peliculas</button>
  {#if mostrar}
<Movies/>
  {/if}
</footer>

<style>
  :global(footer.darkmode) {
    background-color: black;
    color: white;
  }
  footer {
    padding-left: 5rem;
    padding-right: 5rem;
  }
</style>
