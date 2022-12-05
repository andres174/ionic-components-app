import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AnyMxRecord } from 'dns';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  lat!:any;
  lon!:any;

  isL:boolean = false;

  constructor(private geo: Geolocation) { }

  ngOnInit() {

  }

  location(){
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
  b(){
    this.isL = false;
  }

}
