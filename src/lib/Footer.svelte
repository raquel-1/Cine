<script>

  import Movies from "./Movies.svelte";
  import { darkmode } from "$stores/store";
  
</script>
  
  <footer class={$darkmode?'darkmode':''}>
  <Movies />
  </footer>
  
<style>
  :global(footer.darkmode){
    background-color: black;
    color: white;
  }
    footer{
      padding-left: 5rem;
      padding-right: 5rem;
    }
</style>