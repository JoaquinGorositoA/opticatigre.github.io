// bars = document.querySelector(".bars");
// bars.onclick = function(){
//     navBar = document.querySelector(".nav-bar");
//     navBar.classList.toggle("active")
// }


document.addEventListener('DOMContentLoaded', function () {
    // Obtén referencia al botón de hamburguesa y al menú
    var barsButton = document.querySelector('.bars');
    var navBar = document.querySelector('.nav-bar');
  
    // Agrega un evento de clic al botón de hamburguesa
    barsButton.addEventListener('click', function () {
      // Toggle (agrega o quita) la clase 'active' al menú
      navBar.classList.toggle('active');
    });
  
    // Agrega un evento de clic a cada elemento del menú para cerrar el menú
    var menuItems = document.querySelectorAll('.nav-bar ul li a');
    menuItems.forEach(function (item) {
      item.addEventListener('click', function () {
        // Cierra el menú al hacer clic en un elemento del menú
        navBar.classList.remove('active');
      });
    });
  });
  


  function initMap() {
    // Coordenadas de la ubicación
    var location = { lat: -34.425199548202656, lng: -58.58022156095 };

    // Crear un nuevo mapa en el contenedor con id 'map'
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15, // Nivel de zoom
      center: location, // Centro del mapa
    });

    // Marcador en la ubicación
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Optica Tigre',
    });
  }