<script>
    import * as samples from '../data/samples.js';
    export let genres = samples.genres || [];
    export let colors = samples.genres || [];
    
    import { categoria } from "$stores/store";

    let countCat=genres.length;
    let countColor=colors.length;
    console.log(countCat,countColor);
    

   //cuando apreto el boton se acyuliza la categooria
</script>



<ul>

{#each genres as genre,index}
  <li  class="category">
    <button on:click={() => (categoria.update(value => genre))}  
      class="btn btn-category" 
      style="background-image: linear-gradient(135deg, grey, var(--blue));"
    >
      {genre}
    </button>
  </li>
    
{/each}

</ul>

<style>
ul {
  list-style: none;
}
.category {
  margin-bottom: 16px;
}


.btn-category {
  width: 80%;
  height: 50%;
  background-image: none;
}

.btn {
  border: none;
  font-family: 'Coiny', sans-serif;
  line-height: 1;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 16px 0 13px;
  color: #fafaf9;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.3s;

}
.btn:hover {
    transform: scale(110%) rotate(-2deg);
}

</style>