<script>

import Header from './lib/Header.svelte';
import Main from './lib/Main.svelte';
import Footer from '$lib/Footer.svelte';
//import * as samples from './data/samples.js';
import Resultado from './lib/Resultado.svelte';

import { categoria } from "$stores/store";

export let catValue;

    const unsubscribe = categoria.subscribe((value) => {
      catValue = value;
	  });

</script>
<body>
    <Header />
    <Main />
    <Resultado currentCategory={catValue}/>
    <Footer/>

</body>

<style>
  
</style>