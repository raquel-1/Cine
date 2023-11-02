export const actors = {
    LeonardoDicaprio: {

        name: "Leonardo Dicaprio",
        photo: './actors/LeonardoDicaprio.jpeg'
    },
    JohnnyDeep: {
        name: "Johnny Deep",
       photo: './actors/JohnnyDeep.jpg'
    },
     BradPitt: {
        name: "Brad Pitt",
       photo: './actors/BradPitt.jpeg'
    },
};
  
export const peliculas={
    Titanic:{
        name: 'Titanic',   
        stars: 5,
        plot:'holaccc',
        photo:'./movies/Titanic.jpeg',
        actors:[actors.LeonardoDicaprio],
        genre:['drama','suspense'],
    },
    Piratas:{
        name:'Piratas del Caribe: la maldición del Perla Negra',
        stars: 7,
        plot:'holaccc',
        photo:'./movies/Pirates.jpeg',
        actors:[actors.JohnnyDeep],
        genre:['action','suspense'],
    },
    Smith:{
        name:'Sr. y Sra. Smith',
         stars: 5,
        plot:'holaccc',
        photo:'./movies/Smith.jpeg',
        actors:[actors.BradPitt],
        genre:['comedy','romance'],
    },
}

