<script>
    import * as samples from '../data/samples.js';
    export let genres = samples.genres || [];

</script>

<ul>

{#each genres as genre}
<li  class="category">
    <button class="btn btn-category">
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
  background-image: linear-gradient(135deg, #3b82f6, #eab308);
  color: #fafaf9;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.3s;

}
.btn:hover {
    transform: scale(110%) rotate(-2deg);
}

</style>