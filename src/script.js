console.log("ahora si");

let contenidos = document.getElementById("contenidos");
// a partir de aca contenidos es un div de nuestro documento

contenidos.innerHTML = "<div class='titulo-contenidos'>Lista de Películas</div>";

let titulosPeliculas = ["Ponyo", "El viaje de Chihiro", "Mi vecino Totoro", "El Castillo bagabundo", "La princesa Mononoke"];
console.log("longitud de titulosPeliculas", titulosPeliculas.length);

for (let i = 0; i < titulosPeliculas.length; i++){
    contenidos.innerHTML += "<div>" + titulosPeliculas[i] + "</div>";
}
