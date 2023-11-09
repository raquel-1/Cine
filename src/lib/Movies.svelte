<script>
  import * as samples from "../data/samples.js";

  export let movies = samples.peliculas || [];

  let estrenos = movies.slice(6, 24);
  let count=movies.length;
</script>



  <h1>Peliculas (numero total de peliculas {count})</h1>
    <!--movie cards-->
    <div class="movie-cards">
      {#each estrenos as movie}
        <!--card 1-->
        <div class="card">
            <img src={movie.thumbnail} alt="" />
            <div class="titlecage">
                <h1 class="title">{movie.title}</h1>
            </div>
            <div class="content">
              <button class="vermas">VER MÁS</button>
              <div class="contentelements">
                <h1 class="name">{movie.title}</h1>
                <h3 class="info">
                  7.6/10 <i class="fa-solid fa-star"></i>
                     | {movie.year} | 167 min
                </h3>
                <div class="allgenders">
                  {#each movie.genres as genre}
                    <div class="gender drama"><p>{genre}</p></div>
                  {/each}
                </div>
              </div>
            </div>
        </div>  
        {/each}
    </div>
  

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


  /**
  ESTILOS NUEVAS CARTAS****************************************************************************************************
  */

  

.movie-cards{
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-between;
}

.card{
    width: 14.38rem;
    height: 21.9rem;
    position: relative;
    color: #fff;
    border-radius: 0.3rem;
    cursor: pointer;
    overflow: hidden;
    margin: 2rem;
}

.titlecage{
    background-color: rgba(14, 14, 255, 0.669);
    position: absolute;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 2rem;
    padding: 4%;
}

.card:hover .titlecage{
    opacity: 0;
}

.title{
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
}

.card img{
    width: 100%;
    height: 100%;
    transition: all 0.5s;
}

.card:hover img{
    transform: scale(1.05);
}

.content{
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.2), blue);
    
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 4%;
    opacity: 0;
    transition: all 0.2s;
    overflow: hidden;
}

.contentelements{
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
}

.card:hover .content{
    opacity: 1;
}

.name{
    font-size: 1.5rem;
    font-weight: 700;
}

.info{
    font-size: 0.75rem;
    font-weight: 600;
}

.allgenders{
    width: 100%;
    min-height: 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: hidden;
    flex-wrap: wrap;
}
.gender{
    font-size: 0.7rem;
    color: white;
    height: 1.5rem;
    min-width: 4rem;
    border-radius: 0.3rem;
    border: none;
    background-color: #404c4d;
    cursor: pointer;
    margin: 0.5rem;
    text-align: center;
    padding: 0.3rem;
}

.gender p{
    font-size: 1rem;
    font-weight: 600;
    transform: translateY(-0.2rem);
}

.drama{
    background-color: palevioletred;
}

.comedia{
    background-color: orange;
}

.vermas{
    position: absolute;
    right: 4%;
    top: 4%;
    font-size: 0.9rem;
    color: white;
    font-weight: 900;
    height: 1.9rem;
    width: 5rem;
    border-radius: 0.3rem;
    border: none;
    background-color: blue;
    cursor: pointer;
}

/****
estilos de antiguas cartas:
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

*/

</style>