<script>
import Header from './lib/Header.svelte';
import Main from './lib/Main.svelte';
import Buscador from "$lib/Buscador.svelte";
import TodasPelis from '$lib/TodasPelis.svelte';
import Vermas from '$lib/Vermas.svelte';
import { vermas } from "$stores/store";
</script>
<body>

    
    <Header />

    {#if $vermas!=''}
        <Vermas/>
    {:else}
        <Buscador/>
        <Main/>
        <TodasPelis/>
    {/if}
    

</body>

<style>
  
</style>