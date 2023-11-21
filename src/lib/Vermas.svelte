<script>

import { vermas } from "$stores/store";
</script>


<button on:click={() => (vermas.update(value => ''))} >volver</button>
<h1>{$vermas}</h1>