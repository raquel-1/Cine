<script>

import { vermas } from "$stores/store";
import * as samples from '../data/samples.js';
let movies = samples.peliculas || [];
import {darkmode} from "$stores/store";
export let genreColorAssociations =samples.genreColorAssociations || [];

let movie = movies.filter(movie => movie.title.localeCompare($vermas)==0);


function saberColor2(genero){
    let color;
    genreColorAssociations.forEach(function (array) {
        if (array.genre == genero) {
            color= array.color
        }
        });
    return color;
}

</script>

<div class="card-darkmode" id={$darkmode ? "darkmode" : ""}>

<button  class="btn btn-category" on:click={() => (vermas.update(value => ''))} >volver</button>

{#each movie as m}

<div class="movie-card" >
  
    <div class="container">
      
      <img src={m.thumbnail} alt="cover" class="cover" />
          
      <div class="hero">
              
        <div class="details">
        
          <h1 class="title1">{m.title}</h1>
          <h3 >{m.stars} <i class="fa-solid fa-star"></i>
            | {m.year} | {m.duration} min
            </h3>
  
          <div class="title2">Dirigida por {m.director}</div>    
          <div class="title2" style="font-size: 1rem;  ">Director de fotografía {m.photographer}</div>    

          
          <fieldset class="rating">
            <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
            </fieldset>
          
          
        </div> <!-- end details -->
        
      </div> <!-- end hero -->
      
      <div class="description">
        
        <div class="column1">
          {#each m.genres as genre}
            <span class="tag" style="background-color: {saberColor2(genre)};">{genre}</span>
                    
        {/each}
        </div> <!-- end column1 -->
        
        <div class="column2">
          
          <p>{m.extract}</p>
          
                
          
        </div> <!-- end column2 -->
      </div> <!-- end description -->
      <div class="avatars">

        {#each m.cast as actor}
            <div class="actor">
                <div class="fotito">
                    <img src="src/data/actors/user.png" alt="avatar1" />
                </div>
                <p style="color: black;">{actor}</p>
            </div>
            

                
        {/each}

        
        
      </div> <!-- end avatars -->
      
     
    </div> <!-- end container -->
  </div> <!-- end movie-card -->

  {/each}

</div>

<style>
/**
https://codepen.io/drehimself/pen/azBmdK
*/

.card-darkmode{
  padding: 0;
  margin:0;
}

:global(.card-darkmode#darkmode) {
    background-color: black;
    color: white;
  }
.btn-category {
  height: 5rem;
  background-image: none;
}

.btn {
  margin: 1rem;
  border: none;
  font-family: 'Coiny', sans-serif;
  line-height: 1;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 16px 30px 13px;
  color: #fafaf9;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.3s;
  background-image: linear-gradient(135deg, grey, var(--blue));
  position: absolute;
  top: 15rem;
  left: 2rem;

}
.btn:hover {
    transform: scale(110%);
}

a {
  text-decoration: none;
  color:var(--blue)
}

a:hover {
  text-decoration: underline;
}

.movie-card {
  font: 14px/22px "Lato", Arial, sans-serif;
  color: #A9A8A3;
  padding: 40px 0;
}

.container {
  margin: 0 auto;
  width: 48.75rem;
  min-height: 40rem;
  background: #F0F0ED;
  border-radius: 5px;
  position: relative;
}

.hero {
  min-height: 10rem;  
  margin:0;
  position: relative;
  overflow: hidden;
  z-index:1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: var(--blue);
  padding: 1rem 0 0 280px;
 
    
}



.cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 15.625rem;
}

.details {
  
  padding: 0;
  padding-left: 0.5rem;
  

}

.title1 {
    color: white;
    font-size: 2.75rem;
    margin-top: 1rem;
    line-height: 3rem;
    
   
  }

  h3{
      border-radius: 5px;
      color: #544C21;
      font-size: 1.1rem;
      margin-top: 2rem;
      
}

  .title2 {    
    color: #f7f0e8;
    font-size: 1.438rem;    
    font-weight: 300;
    margin-top: 1rem;
  }
  
  
  .likes {
    margin-left: 24px;
  }
  
  
  .likes:before {
    content: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/icon_like.png");
    position: relative;
    top: 2px;
    padding-right: 7px;
  }

.description {
  
  bottom: 0px;
  font-size: 16px;
  line-height: 26px;
  color: #B1B0AC;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
}

.column1 {
  float: left;
  text-align: center;
  margin-top: 3rem;
}

.tag {
  border-radius: .5rem;
  padding: .5rem .8rem;
  font-size: 1rem;
  color: #000;
  margin: 1rem;
}



.column2 {
  padding-right: 2rem;
  padding-top: 2rem;
  width: 480px;
}

.avatars {
  padding: 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  
}

.actor{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px var(--blue);
    border-radius: .5rem;
    margin: 1rem;
    padding: .5rem;

}

.fotito{
    overflow: hidden;
width: 4rem;
height: 4rem;
border-radius: 50%;
}
.fotito img {
    width: 100%;
    height: 100%;
}
  
  
  
  a:hover {
    text-decoration: none;
  }



fieldset, label { margin: 0; padding: 0; }

/****** Style Star Rating Widget *****/

.rating { 
  border: none;
  float: left;
}

.rating > input { display: none; } 
.rating > label:before { 
  margin: 5px;
  margin-top: 0;
  font-size: 1em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > .half:before { 
  content: "\f089";
  position: absolute;
}

.rating > label { 
  color: var(--blue); 
 float: right; 
}



a[data-tooltip] {
  position: relative;
}
a[data-tooltip]::before,
a[data-tooltip]::after {
  position: absolute;
  display: none;
  opacity: 0.85;
}
a[data-tooltip]::before {
  /*
   * using data-tooltip instead of title so we 
   * don't have the real tooltip overlapping
   */
  content: attr(data-tooltip);
  background: #000;
  color: #fff;
  font-size: 13px;
  padding: 5px;
  border-radius: 5px;
  /* we don't want the text to wrap */
  white-space: nowrap;
  text-decoration: none;
}
a[data-tooltip]::after {
  width: 0;
  height: 0;
  border: 6px solid transparent;
  content: '';
}

a[data-tooltip]:hover::before,
a[data-tooltip]:hover::after {
  display: block;
}

/** positioning **/

/* top tooltip */
a[data-tooltip][data-placement="top"]::before {
  bottom: 100%;
  left: 0;
  margin-bottom: 40px;
}
a[data-tooltip][data-placement="top"]::after {
  border-top-color: #000;
  border-bottom: none;
  bottom: 50px;
  left: 20px;
  margin-bottom: 4px;
}




</style>










