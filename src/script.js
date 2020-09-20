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

console.log("longitud de titulosPeliculas", titulosPeliculas.length);

// TAREA: agregar arrays de imagenes y año y meter los valores dentro del literal

for (let i = 0; i < titulosPeliculas.length; i++) {
  contenidos.innerHTML += `
    <div class="titulo-pelicula">
    <img
        src="https://vignette.wikia.nocookie.net/disney/images/c/c5/Spirited_Away.jpg/revision/latest?cb=20130421015528&path-prefix=es"
    />
    <div>
        <div>${titulosPeliculas[i]}</div>
        <div>Año: 1992</div>
        <div>Director: hayao miyazaki</div>
        <div>Perdida en el bosque, una niña (Rumi Hîragi) de 10 años conoce animales, fantasmas y criaturas extrañas.
            Perdida en el bosque, una niña (Rumi Hîragi) de 10 años conoce animales, fantasmas y criaturas extrañas.
            Perdida en el bosque, una niña (Rumi Hîragi) de 10 años conoce animales, fantasmas y criaturas extrañas.
        </div>
    </div>
    </div>
    `;
}
