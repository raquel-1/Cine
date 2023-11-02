<script>
import * as samples from './data/samples.js';
import Movies from './lib/movies.svelte';

export let movies = samples.peliculas || {};
</script>

{#each movies as movie}
	<Movies 
	name={movie.name}  
	/>
{/each}


