<script>
import * as samples from '../data/samples.js';
import Cartas from "./Cards.svelte";

export let currentCategory=null;

export let movies = samples.peliculas || [];

let filteredMovies = [];
let count=0;
let visibility="hidden";


$:{
    filteredMovies = movies.filter(movie => movie.genres.includes(currentCategory));
    count=filteredMovies.length;
    if(count!=0){
        visibility="visible";
    }
    console.log(filteredMovies);
}
	
console.log(filteredMovies);


</script>

<div class="result" style="visibility: {visibility};">
    <h1>{count} Peliculas de '{currentCategory}' encontradas</h1>
    <Cartas   cartas={filteredMovies}  />
</div>


<style>


    h1{
        color: var(--blue);
    }



</style>

