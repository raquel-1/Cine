<script>
import * as samples from './data/samples.js';
import Movies from './lib/Movies.svelte';

export let movies = samples.peliculas || [];
</script>

{#each movies as movie}
	<div>
    <h1>{movie.name}</h1>
	<img src={movie.photo} alt="">
	<h1>{movie.plot}</h1>
	</div>
{/each}


