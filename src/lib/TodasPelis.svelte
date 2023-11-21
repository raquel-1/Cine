<script>
import Cartas from "./Cards.svelte";
  import { darkmode } from "$stores/store";
  import * as samples from "../data/samples.js";

 let movies = samples.peliculas || [];
 let count=movies.length;

 movies.sort(() => Math.random() - 0.5);

  let orden = "";


  let mostrar;

  function Mostrando(e) {
    mostrar=true;
    movies.sort(() => Math.random() - 0.5);
  }

  function ocultando(e) {
    mostrar=false;
     orden = "";
  }

  function onChange(event) {
		orden = event.currentTarget.value;
    console.log("ordenados:"+orden);
    if(orden==="Alfabetico"){
        movies = movies.sort((a, b) => {
          const titleA = a.title.toUpperCase(); // Convertir a mayúsculas para ignorar mayúsculas y minúsculas
          const titleB = b.title.toUpperCase();

          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          // Los títulos son iguales
          return 0;
        });

    }else if(orden==="Anualmoderno"){
      movies = movies.sort((a, b) => b.year - a.year);

    }else if(orden==="Anualantiguo"){
      movies = movies.sort((a, b) => a.year - b.year);

    }else if(orden==="ValoracionMejor"){
      movies = movies.sort((a, b) => b.stars - a.stars);

    }
    else if(orden==="ValoracionPeor"){
      movies = movies.sort((a, b) => a.stars - b.stars);

    }else if(orden==="Duracionmayor"){
      movies = movies.sort((a, b) => b.duration - a.duration);
      
    }else if(orden==="Duracionmenor"){
      movies = movies.sort((a, b) => a.duration - b.duration);
      
    }
	}


</script>

<footer class={$darkmode ? "darkmode" : ""}>
  
    {#if mostrar}
        <button on:click={ocultando} class="btn btn-category" >Ocultar</button>

        <input type="radio"  checked={orden==="Alfabetico"} on:change={onChange} value="Alfabetico"> Alfabético

        <input type="radio"  checked={orden==="Anualmoderno"} on:change={onChange} value="Anualmoderno"> Año de mas moderno a más antiguo

        <input type="radio"  checked={orden==="Anualantiguo"} on:change={onChange} value="Anualantiguo"> Año de mas antiguo a más moderno

        <input type="radio"  checked={orden==="ValoracionMejor"} on:change={onChange} value="ValoracionMejor"> Mejor valoradas

        <input type="radio"  checked={orden==="ValoracionPeor"} on:change={onChange} value="ValoracionPeor"> Peor valoradas

        <input type="radio"  checked={orden==="Duracionmayor"} on:change={onChange} value="Duracionmayor"> Duración mayor

        <input type="radio"  checked={orden==="Duracionmenor"} on:change={onChange} value="Duracionmenor"> Duración mayor

        <h1 style="color: var(--blue);">Peliculas (número total de peliculas {count})</h1>
        <Cartas   cartas={movies}  />
      
    {:else}
      <button on:click={Mostrando} class="btn btn-category" >Todas las peliculas</button>
    {/if}
</footer>

<style>
  :global(footer.darkmode) {
    background-color: black;
    color: white;
  }
  footer {
    padding-left: 5rem;
    padding-right: 5rem;
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

}
.btn:hover {
    transform: scale(110%);
}

</style>
