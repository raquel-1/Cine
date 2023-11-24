<script>
import { darkmode } from "$stores/store";
/*Creamos una funcion para que cuando pulsemos el boton, se actualize el store(variable global) y nos active el modo oscuro(lo contrario pq la funcion en un inico
 esta a false, por lo tanto la ponemos a true)*/
function handleClick(){
    darkmode.update(darkmode=>!darkmode);
}
</script>

<div class="Switch">
    <!--Si el modo es oscuro hacemos que el circulo se mueva, sino lo dejamos quieto-->
    <div class={($darkmode?'switch-container on':'switch-container')}>
       <button class="circle" on:click={handleClick}></button>
    </div>
</div>

<style>
    .switch-container{
        background-color: #7BA9CD;
        width: 50px;
        height: 25px;
        border-radius: 30px;
        margin: 0 10px;
    }

    .switch-container .circle{
        cursor: pointer;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        transition: all 0.2s;
    }
    .on .circle {
    margin-left: 25px;
  }
    </style>