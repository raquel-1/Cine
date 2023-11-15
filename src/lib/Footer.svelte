<script>
  import Movies from "./Movies.svelte";
  import { darkmode } from "$stores/store";
  var mostrar=false
  function handleClick(e) {
    mostrar=true;
  }


</script>

<footer class={$darkmode ? "darkmode" : ""}>
  
  {#if mostrar}
    <Movies/>
    {:else}
      <button on:click={handleClick} class="btn btn-category" >Todas las peliculas</button>
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
  width: 20rem;
  height: 50%;
  background-image: none;
}

.btn {
  margin: 1rem;
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
  background-image: linear-gradient(135deg, grey, var(--blue));

}
.btn:hover {
    transform: scale(110%) rotate(-2deg);
}

</style>
