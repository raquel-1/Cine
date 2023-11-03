export const actors = {
  LeonardoDicaprio: {
    name: "Leonardo Dicaprio",
    photo: "src/data/actors/LeonardoDicaprio.jpeg",
  },
  JohnnyDeep: {
    name: "Johnny Deep",
    photo: "./actors/JohnnyDeep.jpg",
  },
  BradPitt: {
    name: "Brad Pitt",
    photo: "src/data/actors/BradPitt.jpeg",
  },
  AngelinaJolie: {
    name: "Angelina Jolie",
    photo: "src/data/actors/AngelinaJolie.jpg",
  },
  SamRiley:{
    name:"Same Riley",
    photo:"src/data/actors/SamRiley.jpeg",
  },
  KateWinslet:{
    name:"Kate Winslet",
    photo:"/src/data/actors/KateWinslet.jpeg",
  },
  OrlandoBloom:{
    name:"Orlando Bloom",
    photo:"/src/data/actors/OrlandoBloom.jpeg",
  },
  ZoeSaldana:{
    name: "Zoe Saldaña",
    photo:"src/data/actors/ZoeSaldana.jpeg",
  },
  ElleFanning:{
    name: "Elle Fanning",
    photo:"src/data/actors/ElleFanning.jpeg",
  },
  VivienneJoliePitt:{
    name: "Vivienne Jolie-Pitt",
    photo:"src/data/actors/Viviene.jpeg",
  },
  JusticeSmith:{
    name: "Justice Smith",
    photo:"src/data/movies/JusticeSmith.jpeg",
  },
  FreddieHighmore:{
    name:"FreddieHighmore",
    photo:"src/data/actors/FreddieHighmore.jpeg",
  },
  DeepRoy:{
    name: "Deep Roy",
    photo:"src/data/actors/DeepRoy.jpeg",
  },
  HelenaBonhamCarter:{
    name:"Helena Bonham Carter",
    photo:"src/data/actors/HelenaBonhamCarter.jpeg"
  },
  JordanFry:{
    name:"Jordan Fry",
    photo: "src/data/actors/JordanFry.jpeg",
  },
  AnnaSophiaRobb:{
    name:"AnnaSophia Robb",
    photo:"src/data/actors/AnnaSophiaRobb.jpeg",
  },
  JuliaWinter:{
    name:"Julia Winter",
    photo:"src/data/actors/JuliaWinter.jpeg",
  },
  PhilipWiegratz:{
    name:"Philip Wiegratz",
    photo:"src/data/actors/PhilipWiegratz.jpeg"
  },
  ChristopherLee:{
    name:"Christopher Lee",
    photo:"src/data/actors/ChristopherLee.jpeg",
  },

};

export const genders=[ 
"Acción",
"Aventura",
"Catástrofe",
"Ciencia Ficción",
"Comedia",
"Documentales",
"Drama",
"Fantasía",
"Musicales",
"Romance",
"Suspense",
"Terror",
];
  
export const peliculas = [
  {
    id: "Titanic",
    name: "Titanic",
    stars: 5,
    plot: "holaccc",
    photo: "src/data/movies/Titanic.jpeg",
    actors: [actors.LeonardoDicaprio, actors.KateWinslet],
    genre: ["Drama","Romance"],
    director: "James Cameron"
  },
  {
    id: "Piratas",
    name: "Piratas del Caribe: la maldición del Perla Negra",
    stars: 7,
    plot: "holaccc",
    photo: "src/data/movies/Pirates.jpeg",
    actors: [actors.JohnnyDeep, actors.OrlandoBloom, actors.ZoeSaldana],
    genre: ["Acción","Aventura"],
    director: "Gore Verbinski",
  },
  {
    id: "Smith",
    name: "Sr. y Sra. Smith",
    stars: 5,
    plot: "holaccc",
    photo: "src/data/movies/Smith.jpeg",
    actors: [actors.AngelinaJolie, actors.BradPitt],
    genre: ["Acción","Drama"],
    director: "Doug Liman",
  },
  {
    id: "Malefica",
    name: "Malefica",
    stars: 5,
    plot: "holaccc",
    photo: "src/data/movies/Malefica.jpeg",
    actors: [actors.AngelinaJolie,actors.SamRiley, actors.ElleFanning,actors.VivienneJoliePitt],
    genre: ["Drama", "Fantasía"],
    director: "Robert Stromberg",
  },
  {
    id: "OrgulloPrejuicio",
    name:"Orgullo y prejuicio",
    stars: 5,
    plot: "holaccc",
    photo: "src/data/movies/Orgullo.jpeg",
    actors: [actors.SamRiley],
    genre: ["Drama"],
    director: "Joe Wright",
  },
  {
    id:"VioletFinch",
    name:"Violet y Finch",
    stars: 2,
    plot: "holaccc",
    photo: "src/data/movies/VioletFinch.jpeg",
    actors: [actors.ElleFanning, actors.JusticeSmith],
    genre: ["Romance"],
    director: "Brett Haley",
  },
  {
    id:"CharlieChocolateFactory",
    name:"Charlie and the Chocolate Factory",
    stars: 2,
    plot: "holaccc",
    photo: "src/data/movies/ChocolateFactory.jpeg",
    actors: [actors.JohnnyDeep, 
      actors.FreddieHighmore,actors.
      DeepRoy,actors.HelenaBonhamCarter,
      actors.JordanFry,
      actors.AnnaSophiaRobb,
      actors.JuliaWinter,
      actors.PhilipWiegratz,
      actors.ChristopherLee],
    genre: ["Fantasía"],
    director: "Tim Burton",
  },
];

