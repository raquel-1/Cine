<script>
  import * as samples from "../data/samples.js";

  export let movies = samples.peliculas || [];

  let estrenos = movies.slice(6, 24);
  let count=movies.length;
</script>

<div>
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

<!-- 
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
  .cartas {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .carta {
    position: relative;
    width: 220px;
    height: 340px;
    box-shadow: inset 0.4rem 0.4rem 5px rgb(143, 103, 3),
      inset -0.4rem -0.4rem 5px rgb(242, 181, 27), 0 0 0 4px darkgoldenrod,
      0 0 0 4px darkgoldenrod, 0.4rem 0.4rem 5px rgb(113, 82, 4),
      -0.4rem -0.4rem 5px rgb(242, 181, 27);

    background-color: aliceblue;
    border-radius: 15px;
    margin: 2rem;
  }
  .caja {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border-radius: 15px;
    background-color: aliceblue;
    box-shadow: 0 10px 20px rgb(143, 103, 3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
  }
  .imagen {
    overflow: hidden;
    height: 80%;
    width: 100%;
  }

  img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .contenido {
    border-top: white 2px solid;
    background-color: white;
    height: 20%;
    width: 100%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  a {
    color: darkgoldenrod;
    --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
  a::after {
    content: "";
    display: block;
    background-color: darkgoldenrod;
    width: 100%;
    margin-top: 3px;
    height: 3px;
    clip-path: var(--clippy);
    transition: clip-path 0.5s;
  }
  a:hover {
    --clippy: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .carta:hover .caja {
    transform: translateY(-30px);
    box-shadow: 0 10px 40px rgb(93, 67, 2);
  }
</style>