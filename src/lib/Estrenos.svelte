<script>
	import { cast } from './../data/samples.js';
    import * as samples from '../data/samples.js';
    export let movies = samples.peliculas || [];

    var estreno = ["Oppenheimer", "Barbie", "Blue Beetle", "The Marvels", "Bad Boys for Life"];

    function map(xs, f) {
    var ys = [];
    for (var i = 0; i < xs.length; i++) {
        ys.push(f(xs[i]));
    }
    return ys;
    }

function filter(xs, f) {
    var ys = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i])) {
            ys.push(xs[i]);
        }
    }
    return ys;
    }

function buscarPeli(word) {
    return movies.filter(element => element.title === word);
}



    let favorito = map(estreno, buscarPeli);
    console.log(">>>>>>>", favorito);

    console.log(favorito[0][0].title);
    
</script>

<div class="estrenos">
    <h1>Estrenos</h1>



{#each favorito as pelicula}
	<div class="carta">  

        <div class="caja">
        <div class="imagen">
            <img class="imagen-pelicula" src={pelicula[0].thumbnail} alt="">
        </div>

        <div class="contenido">
            <a id='nombre'>{pelicula[0].title}</a> 
        </div>
    </div>

	</div>
{/each}

</div>