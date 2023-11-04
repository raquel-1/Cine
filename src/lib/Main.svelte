<script>
  import Movies from '../lib/Movies.svelte';
  import Categorias from './Categorias.svelte';
  import Estrenos from './Estrenos.svelte';
</script>

<div class="main">
  <div class="aside">
    <Categorias />
  </div>
  <div class="section">
    <Estrenos />
    <Movies />
  </div>
</div>



<style>
.main {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 48px;
  height: calc(100vh - 48px - 68px - 40px);
}

@media (max-width: 900px) {
  .main {
    grid-template-columns: 1fr;
    /* Fixed in a video text overlay, to fix scrolling issue on small screens */
    height: auto;
  }
}

</style>