<script>
import * as samples from '../data/samples.js';
export let cartas;
export let genreColorAssociations =samples.genreColorAssociations || [];


function saberColor2(genero){
    let color;
    genreColorAssociations.forEach(function (array) {
        if (array.genre == genero) {
            color= array.color
        }
        });
    return color;
}

//console.log("saber color de horror= "+saberColor2('Horror'))


</script>


<div class="movie-cards">
    {#each cartas as movie}
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
                {movie.stars} <i class="fa-solid fa-star"></i>
                   | {movie.year} | {movie.duration} min
              </h3>
              <div class="allgenders">
                {#each movie.genres as genre}
                  <div class="gender" style="background-color: {

                    saberColor2(genre)

                  };"><p style="color:black">{genre}</p></div>
                {/each}
              </div>
            </div>
          </div>
      </div>  
      {/each}
  </div>









<style>


  /**
  ESTILOS NUEVAS CARTAS AZULES****************************************************************************************************
  */

  

  .movie-cards{
    width: 100%;
    /*min-height: 10vh;*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-around;
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
    background-color: var(--blue);
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
    background: linear-gradient(rgba(0,0,0,0.2), var(--blue));
    
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
    background-color: var(--blue);
    cursor: pointer;
}

</style>