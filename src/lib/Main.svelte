<script>
  //import Movies from '../lib/Movies.svelte';
  import Categorias from './Categorias.svelte';
  import Estrenos from './Estrenos.svelte';
  import * as samples from '../data/samples';
  export let movies = samples.peliculas || [];
 let copyMovies=[...movies];
 import { darkmode } from "$stores/store";
</script>

<div class="main" id={$darkmode?'darkmode':''}>
  <div class="aside">
    <Categorias />
  </div>
  <div class="section">
    <Estrenos />
  </div>
</div>



<style>
   /*Creamos un estilo global, el cual contendra los estilos de nuestro modo oscuro de la pagina*/
  :global(.main#darkmode) {
    background-color: black;
    color: white;
  }
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