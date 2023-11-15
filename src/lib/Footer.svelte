<script>
  import Movies from "./Movies.svelte";
  import { darkmode } from "$stores/store";
  var mostrar;
  function Mostrando(e) {
    mostrar=true;
  }

  function ocultando(e) {
    mostrar=false;
  }


</script>

<footer class={$darkmode ? "darkmode" : ""}>
  
    {#if mostrar}
    <button on:click={ocultando} class="btn btn-category" >Ocultar</button>
    <Movies/>
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
