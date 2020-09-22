console.log("ahora si");

let contenidos = document.getElementById("contenidos");
// a partir de aca contenidos es un div de nuestro documento

contenidos.innerHTML =
  "<div class='titulo-contenidos'>Lista de Películas</div>";

let titulosPeliculas = [
  "Ponyo",
  "El viaje de Chihiro",
  "Mi vecino Totoro",
  "El Castillo bagabundo",
  "La princesa Mononoke",
];

let ImagenesPeliculas = [
  "https://upload.wikimedia.org/wikipedia/en/9/9d/Ponyo_%282008%29.png",
  "https://pics.filmaffinity.com/sen_to_chihiro_no_kamikakushi-348587850-large.jpg",
  "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
  "https://img2.rtve.es/im/5611886/?w=900",
  "https://pics.filmaffinity.com/mononoke_hime-598406013-large.jpg",
];

let AñoPeliculas = [
  "2008",
  "2001",
  "1988",
  "2004",
  "1997",
];


let InfoPeliculas = [
"Durante una excursión prohibida para ver el mundo de la superficie, una princesa pez de colores conoce a un niño llamado Sosuke, quien le pone el nombre de Ponyo.",
"Perdida en el bosque, una niña (Rumi Hîragi) de 10 años conoce animales, fantasmas y criaturas extrañas.",
" esta historia sigue a las estudiantes y hermanas Satsuke y Mei mientras se establecen en su casa de campo con su padre.Cuando las hermanas exploran su nueva casa, descubren y hacen amistad con unos duendes juguetones ",
"Después de que una bruja la transforma en una anciana, una fabricante de sombreros busca refugio en la casa ambulante de un singular mago",
"Un príncipe se ve involucrado en un conflicto entre una princesa del bosque y el abuso de la mecanización",
];



console.log("longitud de titulosPeliculas", titulosPeliculas.length);

// TAREA: agregar arrays de imagenes y año y meter los valores dentro del literal

for (let i = 0; i < titulosPeliculas.length; i++) {
  contenidos.innerHTML += `
    <div class="titulo-pelicula">
    <img
        src=${ImagenesPeliculas[i]}
    />
    <div>
        <div>${titulosPeliculas[i]}</div>
        <div>Año: ${AñoPeliculas[i]}</div>
        <div>Director: hayao miyazaki</div>
        <div>${InfoPeliculas[i]}        </div>
    </div>
    </div>
    `;
}
