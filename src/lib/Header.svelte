<script>
  import Ajustes from "./Ajustes.svelte";
  import Buscador from "./Buscador.svelte";
  import Logo from "./Logo.svelte";
  import { darkmode } from "$stores/store";
</script>

<header class="nav">
  <div class="container" id={$darkmode ? "darkmode" : ""}>
 <div class="logo">
      <Logo />
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
  :global(.container#darkmode, .item#darkmode) {
    background-color: white;
    color: black;
  }
  :global(.prin#darkmode) {
    background-color: black;
    color: white;
  }
  .nav {
    margin-bottom: 40px;
  }

  .prin {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container {
    background-color: black;
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .item {
    color: white;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 900;
    --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
  .item::after {
    content: "";
    display: block;
    background-color: #fff;
    width: 100%;
    margin-top: 3px;
    height: 5px;

    clip-path: var(--clippy);
    transition: clip-path 0.5s;
  }
  .item:hover {
    --clippy: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
</style>
