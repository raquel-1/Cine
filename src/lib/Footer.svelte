<script>

import Movies from "./Movies.svelte";
import { darkmode } from "$stores/store";
</script>

<footer class={$darkmode?'darkmode':''}>
<Movies />
</footer>

<style>
    footer{
    padding:12rem;
    }
    :global(footer.darkmode) {
    background-color: black;
    color: white;
  }
</style>