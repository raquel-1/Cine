import { writable } from "svelte/store";
//al crear esta variable como un store, podemos acceder a ella desde cualquier parte de nuestra aplicacion
//creamos un store para el modo oscuro
export let darkmode=writable(false);

export let categoria=writable('');

export let vermas=writable('');



