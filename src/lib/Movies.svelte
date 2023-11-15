<script>
  import Cartas from "./Cards.svelte";

  import * as samples from "../data/samples.js";

  export let movies = samples.peliculas || [];

  //let estrenos = movies.slice(6, 24);
  let count=movies.length;
</script>


  <h1>Peliculas (numero total de peliculas {count})</h1>
  <Cartas   cartas={movies}  />
    
  

<style>



</style>