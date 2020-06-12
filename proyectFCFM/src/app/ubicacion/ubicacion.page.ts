import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;


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
  
  constructor(public geolocation: Geolocation) {}
  
  private async getLocation(){
    const rta = await this.geolocation.getCurrentPosition();
    console.log("lat: " + rta.coords.latitude + "long: " + rta.coords.longitude);
    return{
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    }
  }

  destination = { lat: 25.725542, lng: -100.315187 };

  ngOnInit() {
  }


  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');
    const indicatorsEle: HTMLElement = document.getElementById('indicators');
    const myLatLng = {lat: 25.725542, lng: -100.315187};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13.2
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
    });
  }

  private async calculateRoute(){
    this.directionsService.route({
      origin: await this.getLocation(),
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

}
