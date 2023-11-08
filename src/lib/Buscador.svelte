<script>
 import * as samples from '../data/samples';
  export let movies = samples.peliculas || [];
  //creamos una variable en la que iran las peliculas que coincidan con la busqueda
 let copyMovies=[];
 let copyCast=[];
var countMovies=0;
var countCast=0;
function handleSearchTitle(e){
    //creamos una variable para guardar el evento de la busqueda
    const p=e.target.value;
    if(p===''){
        copyMovies=[];
    }
    else{
    //Hacemos un filter por cada pelicula
        const results=movies.filter(movie =>{
            const title=movie.title;
            //console.log(cast.filter(c=>c.search(p)>=0))
            return title.search(new RegExp(p, 'i')) >=0 //|| cast.filter(c=>c.search(p)!=1);
        })
        copyMovies=[...results]
        countMovies=copyMovies.length;
    }      
}
function handleSearchCast(e){
    //creamos una variable para guardar el evento de la busqueda
    const p=e.target.value;
    if(p===''){
        copyCast=[];
    }
    else{
    //Hacemos un filter por cada pelicula
        const results=movies.filter(movie =>{
            const cast=movie.cast;
            //console.log(cast.filter(c=>c.search(p)>=0))
            return cast.filter(c=>c.search(new RegExp(p,'i'))>=0);
        })
        copyCast=[...results]
        countCast=copyCast.length;
    }      
}

</script>

<div class="search">
<!--El evento onInput nos permite, que mientras escribamos se active el evento, mientras que el evento onChange solo se activa cuando terminamos de escribir-->
Titulos:<input type="text" placeholder="Buscar..." on:input={handleSearchTitle}>
<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
Reparto:<input type="text" placeholder="Buscar..." on:input={handleSearchCast}>
<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
 <div>
    <h3>{countMovies} resultados por titulo</h3>
  </div>
<div class="cartas">
    {#each copyMovies as movie}
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
      <a id="puntuacion">{movie.stars}</a>
    {/each}
  </div>
  
 <div>
    <h3>{countCast} resultados por reparto</h3>
  </div>
<div class="cartas">
    {#each copyCast as movie}
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
      <a id="puntuacion">{movie.stars}</a>
    {/each}
  </div>
</div>
<style>
    input{
        width: 25rem;
    }
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