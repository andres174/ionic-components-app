import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
const mapboxgl = require('mapbox-gl');


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  lat!: any;
  lon!: any;

  isL: boolean = false;

  constructor(private geo: Geolocation) { }

  ngOnInit() {
    this.mapa();
  }

  location() {
    this.geo.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      this.isL = true;

      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
      this.isL = false;
    });
  }
  b() {
    this.isL = false;
  }
  mapa() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVzMTc0IiwiYSI6ImNsYmI3bXc1czBnbXQzeG44dmJlYnRqZTgifQ.8Y40lULQILA452Upl-w4Lw';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    map.on('load', function () {
      map.resize();
    });

    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(assets/aaaaaaaa.jpg)';
    el.style.width = '64px';
    el.style.height = '64px';


    const popup = new mapboxgl.Popup({ offset: 25 }).setText(

      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    );

    const marker = new mapboxgl.Marker(el)
      .setLngLat([-74.5, 40])
      .setPopup(popup)
      .addTo(map);

    


  }



}
