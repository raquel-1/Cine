<script>
  import Cartas from "./Cards.svelte";

  import * as samples from "../data/samples.js";

  export let movies = samples.peliculas || [];

  let estrenos = movies.slice(6, 24);
  let count=movies.length;
</script>


  <h1>Peliculas (numero total de peliculas {count})</h1>
  <Cartas   cartas={estrenos}  />
    
  

<!-- 
  <h1>Peliculas (numero total de peliculas {count})</h1>
  <div class="cartas">
    {#each estrenos as movie}
      <div class="carta">
        <div class="caja">
          <div class="imagen">
            <img class="imagen-pelicula" src={movie.thumbnail} alt="" />
          </div>

          <div class="contenido">
            <a id="nombre">{movie.title}</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>


        <img class="imagen-pelicula" src={movie.photo} alt="">
        <p class="titulo">{movie.name}</p>
        <ul>
        {#each movie.genre as genero}
            <li>||{genero}||</li>
        {/each}
        </ul>

         <ul>
        {#each movie.actors as actor}
            <li>
                <p>{actor.name}</p>
                <img class="imagen-actor" src={actor.photo} alt="" >
            </li>
        {/each}
        </ul> -->

<style>



</style>