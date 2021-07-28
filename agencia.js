
let arrayJson =[];
function datos()
{
let nombre = document.getElementById("Nombre").value;
let apellidos = document.getElementById("Apellidos").value;
let telefono = document.getElementById("Telefono").value;
let email = document.getElementById("Email").value;
let fechaSalida = document.getElementById("fechaSalida").value;
let fechaVuelta = document.getElementById("fechaVuelta").value;
let ciudades = document.getElementById("Ciudades").value;
let numeroAdultos = document.getElementById("numero").value;
let aerolinea = document.getElementById("aerolinea3").value;
let informacion = document.getElementById("Comentario").value;
let politicas = document.getElementById("Politicas").value;

let Json =
{
    "Nombre":nombre, 
    "Apellidos":apellidos ,
    "Telefono":telefono,
    "Email":email,
    "fechaSalida":fechaSalida, 
    "fechaVuelta":fechaVuelta ,
    "Ciudades":ciudades,
    "numero":numeroAdultos,
    "aerolinea3":aerolinea,
    "Comentario":informacion,
    "Politicas":politicas
}


arrayJson.push(Json)
console.log(arrayJson);
alert (JSON.stringify(arrayJson))

// console.log(JSON.stringify(Json));

// alert(JSON.stringify(Json));
}






