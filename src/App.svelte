<script>

import Header from './lib/Header.svelte';
import Main from './lib/Main.svelte';
import TodasPelis from '$lib/TodasPelis.svelte';
//import * as samples from './data/samples.js';


import { categoria } from "$stores/store";

export let catValue;

    const unsubscribe = categoria.subscribe((value) => {
      catValue = value;
	  });

</script>
<body>
    <Header />
    <Main/>
    <TodasPelis/>

</body>

<style>
  
</style>