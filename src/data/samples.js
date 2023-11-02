export const actors = {
  LeonardoDicaprio: {
    name: "Leonardo Dicaprio",
    photo: "./actors/LeonardoDicaprio.jpeg",
  },
  JohnnyDeep: {
    name: "Johnny Deep",
    photo: "./actors/JohnnyDeep.jpg",
  },
  BradPitt: {
    name: "Brad Pitt",
    photo: "./actors/BradPitt.jpeg",
  },
  AngelinaJolie: {
    name: "Angelina Jolie",
    photo: "src/data/actors/AngelinaJolie.jpg",
  },
  SamRiley:{
    name:"Same Riley",
    photo:"src/data/actors/SamRiley.jpeg"
  }
};
  
export const peliculas = [
  {
    name: "Titanic",
    stars: 5,
    plot: "holaccc",
    photo: "src/data/movies/Titanic.jpeg",
    actors: [actors.LeonardoDicaprio],
    genre: ["drama", "suspense"],
  },
  {
    name: "Piratas del Caribe: la maldición del Perla Negra",
    stars: 7,
    plot: "holaccc",
    photo: "src/data/movies/Pirates.jpeg",
    actors: [actors.JohnnyDeep],
    genre: ["action", "suspense"],
  },
  {
    name: "Sr. y Sra. Smith",
    stars: 5,
    plot: "holaccc",
    photo: "src/data/movies/Smith.jpeg",
    actors: [actors.BradPitt, actors.AngelinaJolie],
    genre: ["comedy", "romance"],
  },
  {
    name: "Malefica",
    stars: 5,
    plot: "holaccc",
    photo: "src/data/movies/Malefica.jpeg",
    actors: [actors.AngelinaJolie,actors.SamRiley],
    genre: ["cartoon", "action"],
  },
  {
    name:"Orgullo y prejuicio",
    stars: 5,
    plot: "holaccc",
    photo: "src/data/movies/Orgullo.jpeg",
    actors: [actors.SamRiley],
    genre: ["cartoon", "action"],
  }
];

