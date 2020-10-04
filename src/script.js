console.log("ahora si");

let contenidos = document.getElementById("contenidos");
// a partir de aca contenidos es un div de nuestro documento

contenidos.innerHTML =
  "<div class='titulo-contenidos'>Lista de Películas</div>";

// let titulosPeliculas = [
//   "Ponyo",
//   "Mi vecino Totoro",
//   "El viaje de Chihiro",
//   "El Castillo bagabundo",
//   "La princesa Mononoke",
// ];

// let ImagenesPeliculas = [
//   "https://upload.wikimedia.org/wikipedia/en/9/9d/Ponyo_%282008%29.png",
//   "https://pics.filmaffinity.com/sen_to_chihiro_no_kamikakushi-348587850-large.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
//   "https://img2.rtve.es/im/5611886/?w=900",
//   "https://pics.filmaffinity.com/mononoke_hime-598406013-large.jpg",
// ];

// let AñoPeliculas = ["2008", "2001", "1988", "2004", "1997"];

// let InfoPeliculas = [
//   "Durante una excursión prohibida para ver el mundo de la superficie, una princesa pez de colores conoce a un niño llamado Sosuke, quien le pone el nombre de Ponyo.",
//   "Perdida en el bosque, una niña (Rumi Hîragi) de 10 años conoce animales, fantasmas y criaturas extrañas.",
//   " esta historia sigue a las estudiantes y hermanas Satsuke y Mei mientras se establecen en su casa de campo con su padre.Cuando las hermanas exploran su nueva casa, descubren y hacen amistad con unos duendes juguetones ",
//   "Después de que una bruja la transforma en una anciana, una fabricante de sombreros busca refugio en la casa ambulante de un singular mago",
//   "Un príncipe se ve involucrado en un conflicto entre una princesa del bosque y el abuso de la mecanización",
// ];

let peliculas = [
  {
    title: "Ponyo",
    year: "2008",
    img: "https://upload.wikimedia.org/wikipedia/en/9/9d/Ponyo_%282008%29.png",
    info:
      "Durante una excursión prohibida para ver el mundo de la superficie, una princesa pez de colores conoce a un niño llamado Sosuke, quien le pone el nombre de Ponyo.",
  },
  {
    title: "Mi vecino Totoro",
    year: "1988",
    img:
      "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
    info:
      "esta historia sigue a las estudiantes y hermanas Satsuke y Mei mientras se establecen en su casa de campo con su padre.Cuando las hermanas exploran su nueva casa, descubren y hacen amistad con unos duendes juguetones",
  },
  {
    title: "El viaje de Chihiro",
    year: "2001",
    img:
      "https://pics.filmaffinity.com/sen_to_chihiro_no_kamikakushi-348587850-large.jpg",
    info:
      "Perdida en el bosque, una niña (Rumi Hîragi) de 10 años conoce animales, fantasmas y criaturas extrañas.",
  },
  // {
  //   title: "",
  //   year: "",
  //   img: "",
  //   info: "",
  // },
  // {
  //   title: "",
  //   year: "",
  //   img: "",
  //   info: "",
  // },
];

for (let i = 0; i < peliculas.length; i++) {
  contenidos.innerHTML += `
    <div class="titulo-pelicula">
    <img
        src=${peliculas[i].img}
    />
    <div>
        <div>${peliculas[i].title}</div>
        <div>Año: ${peliculas[i].year}</div>
        <div>Director: hayao miyazaki</div>
        <div>${peliculas[i].info}</div>
        <button class="info" onclick="abrirInfo(${i})">+ info</button>
    </div>
    </div>
    `;
}

// armar maquetado de seccion info
// (si se llega) agregar al objeto una infoChoclazo para mostrar en la seccion

function abrirInfo(numPelicula) {
  //alert("clickeaste la pelicula " + peliculas[numPelicula].title);
  contenidos.innerHTML = `
    <div>${peliculas[numPelicula].title}</div>
    <img
        src=${peliculas[numPelicula].img}
    />
  `;
}
