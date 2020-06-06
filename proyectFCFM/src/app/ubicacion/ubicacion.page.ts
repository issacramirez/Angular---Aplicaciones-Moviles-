import { Component, OnInit } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx";

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map = null;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  platform: any;
  
  // lati: 25.737811;
  // lngi: -100.263298;

  
  constructor(public geolocation: Geolocation) {}
  

  // la consola marca error getting location, user denied location promt
  // esta funcion obtiene la longitud y latitud del que usa la aplicacion pero tiene fallo
  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) =>{
      console.log("lat: " + resp.coords.latitude + "long: " + resp.coords.longitude)
      // this.lati = resp.coords.latitude;
      // this.lngi = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  

  // variables temporales para guardarlas de la funcion getLocation
  lati: number;
  lngi: number;

  // coordenada origen temporal, se quiere obtener de currentPosition para generar la ruta 
  // de el que usa la aplicacion
   // origen
   origin = { lat: 25.737811, lng: -100.263298 };
   // fcfm
   destination = { lat: 25.725542, lng: -100.315187 };

  ngOnInit() {
   this.loadMap();
   // obtener la geolocalizacion al momento que carga la pagina
  //  this.getLocation();
  }


  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // acceder a los indicadores
    const indicatorsEle: HTMLElement = document.getElementById('indicators');
    // create LatLng object
    const myLatLng = {lat: 25.725542, lng: -100.315187};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13.2
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      // this.renderMarkers();
      this.calculateRoute();
    });
  }

      //     ATENCION

      //esta funcion calcula la ruta y funciona bien
      // la variable origin esta con una direccion de prueba
      // se pretende usar la direccion de quien usa la app con getLocation
      // pero no da error la funcion mencionada
  private calculateRoute(){
    this.directionsService.route({
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  markers: Marker[] = [
    {
      position: {
        lat: 25.725542,
        lng: -100.315187
      },
      title: 'Facultad'
    },
  ];

}
