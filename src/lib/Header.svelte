<script>
  import Ajustes from "./Ajustes.svelte";
  import Buscador from "./Buscador.svelte";
  import Logo from "./Logo.svelte";
  import { darkmode } from "$stores/store";
</script>

<header class="nav">
    <div class="container" >
      <div class="logo">
        <Logo />
      </div>
      <div class="logoName">
        <span>¡HYFE  F I L M S!</span>
      </div>
      <div class="Settings">
        <Ajustes />
      </div>
    </div>
    <div class="prin" id={$darkmode ? "darkmode" : ""}>
      <div class="search">
        <Buscador />
      </div>
    </div>
</header>

<style>
  /*Creamos un estilo global, el cual contendra los estilos de nuestro modo oscuro de la pagina*/
  
  :global(.prin#darkmode) {
    background-color: black;
    color: white;
  }
  .nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  .container {
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-right: 4px solid;
  }

  @media (max-width: 1380px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-bottom: 2rem;
    }
  }

  span{
    font-size: 5rem;
    display: block;
    font-family: monospace;
    white-space: nowrap;
    width: 17ch;
    animation: typing 2s steps(17),blink .5s infinite step-end alternate;
    overflow: hidden;
    color: #7BA9CD;
    text-align: center;
  }

  @media (max-width: 900px) {
    span {
      font-size: 4rem;
    }
  }

  @keyframes typing{
    from {width: 0}
  }

  @keyframes blink{
    50%{border-color: transparent}
  }


  .prin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
  }



</style>
