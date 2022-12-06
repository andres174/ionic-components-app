import { ModalController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2, Inject } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { GoogleMapsService } from 'src/app/services/google-maps.service';
/* import { Plugins } from '@capacitor/core';

const {Geolocation} = Plugins; */
declare var google:any;

@Component({
  selector: 'app-map-g',
  templateUrl: './map-g.page.html',
  styleUrls: ['./map-g.page.scss'],
})
export class MapGPage{


  position = {
    lat:-0.698483, 
    lng:-80.094760
  };

  label = {
    titulo: 'Ubicación',
    subtitulo: 'Mi ubicación de envío'
  }

  map:any;
  marker:any;
  infowindow:any;
  positionSet:any;
  
  @ViewChild("map") divMap!: ElementRef;

  

  constructor(private renderer:Renderer2,
              @Inject(DOCUMENT) private document:any,
              private googlemaps: GoogleMapsService,
              private modalCtrl: ModalController,
              private geo: Geolocation
              ) { 
    
  }

  ngOnInit():void{
    this.init();
  }
  
  async init(){
    this.googlemaps.init(this.renderer, this.document).then(() => {
        this.initMap();
    }).catch( (err:any) => {
      console.log(err);
      //dasdassadas
    })
  }

  initMap(){

    const position = this.position;
    
    let latLng = new google.maps.LatLng(position.lat, position.lng);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      clickableIcons: false
    }

    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: true,
    });

    this.clickHandleEvent();
    this.infowindow = new google.maps.InfoWindow();

    this.addMarker(position);
    this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);

    /* if(this.label.titulo.length){
      this.addMarker(position);
      this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);
    } */



  }

  clickHandleEvent(){
    this.map.addListener('click', (event:any) => {
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      this.addMarker(position);
    });
  }

  addMarker(position:any):void{
    let latLng = new google.maps.LatLng(position.lat, position.lng);

    this.marker.setPosition(latLng);
    this.map.panTo(position);
    this.positionSet = position;
  }
  setInfoWindow(marker:any, titulo:string, subtitulo:string){
    const contentString = '<div id="contentInsideMap">'+
                          '<div>' +
                          '</div>' +
                          '<p style="font-weight: bold; margin-bottom: 5px; color: black;">'+ titulo + '</p>'+
                          '<div id="bodyContent">' +
                          '<p class"normal m-8" style="color: black;">'
                          + subtitulo
                          + '</p>' +
                          '</div>'+
                          '</div>';
                          
    console.log(contentString);
    this.infowindow.setContent(contentString);
    this.infowindow.open(this.map, marker);
  }

  async mylocation(){
    console.log('click en ubicacion actual');

    
    this.geo.getCurrentPosition().then((resp) => {
      

      const position = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }

      this.addMarker(position)

      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);

    });

  }

  

}
