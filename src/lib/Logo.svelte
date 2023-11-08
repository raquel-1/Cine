<script>
//exportamos la variable para poder cogerla como propiedad que hemos pasado al componente Logo
export let appName='';
</script>

<div class="Logo">
<img src="src/lib/img/logo.gif" alt="logo"/>
{appName}
</div>

<style>
    .Logo{
        display: flex;
        align-items: center;
    }
img{
    width: 20rem;
    height: 10rem;
    /*border-radius: 100%;
    /*border-radius: 80px 80px 80px 80px;*/
    padding: 20px;
}
</style>