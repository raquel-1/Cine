<script>
    import * as samples from '../data/samples.js';
    import { categoria } from "$stores/store";

    export let genreColorAssociations =samples.genreColorAssociations || [];

</script>



<ul>

{#each genreColorAssociations as {genre,color}}
  <li  class="category">
    <button on:click={() => (categoria.update(value => genre))}  
      class="btn btn-category" 
      style="background-image: linear-gradient(135deg, {color}, var(--blue));"
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