console.log("hola");

var hotel = {
  name: "Málaga Plaza",
  location: "Málaga",
  rating: 1,
  confirmacion: true,
}

hotel.name = prompt ("Nombre del Hotel");
document.getElementById ("hotel-name").innerHTML = hotel.name;

hotel.location = prompt ("Ubicacion del Hotel");
document.getElementById ("hotel-location").innerHTML = hotel.location;

hotel.rating = prompt ("¿Cuantas estrellas de las al Hotel?. De 1 a 5");
document.getElementById ("hotel-rating").innerHTML = hotel.rating + " Estrellas";

hotel.confirmacion = confirm ("Aceptar para confirmar el usuario.");
document.getElementById ("hotel-confirmacion").checked = hotel.confirmacion;