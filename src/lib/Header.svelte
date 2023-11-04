<script>

</script>


<header class="nav">
    <div class="container">
      
          <a href="#home" class="item">Home</a>
          <a href="#categorias" class="item">Categorias</a>
          <a href="#peliculas" class="item">Peliculas</a>
          <a href="#cine" class="item">Cine</a>
          <a href="#ventasanticipadas" class="item">Ventas Anitcipadas</a>
          <a href="#buscar" class="item">Buscar</a>
        
    </div>

</header>

<style>

.nav{
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.container{
    display: flex;
  align-items: center;
  gap: 16px;
}

.item{
        color: black;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 900;
        --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
        
    }
    .item::after{
        content: "";
        display: block;
        background-color: #fff;
        width: 100%;
        margin-top: 3px;
        height: 5px;
     
        clip-path: var(--clippy);
        transition:  clip-path .5s;
    }
    .item:hover{
        --clippy: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }



</style>