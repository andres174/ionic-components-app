import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

declare var google:any;

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  
  key = environment.apiKey;
  isLoaded = false;

  constructor() { }


  init(renderer:any, document:any): Promise<any>{

    return new Promise((resolve) => {


      if(this.isLoaded){
        console.log('google is preview loaded');
        resolve(true);
        return;
      }

      const script = renderer.createElement('script');
      script.id = 'googleMaps';

      window['mapInit'] = () => {
        this.isLoaded = true;
        if(google){
          console.log('google is loaded');
        } else {
          console.log('google is not defined');
        }
        resolve(true);
        return;
      }

      if(this.key){
        script.src = 'https://maps.google.com/maps/api/js?key=' + this.key + '&callback=mapInit';
      }else{
        script.src = 'https://maps.google.com/maps/api/js?callback=mapInit';
      }
      
      renderer.appendChild(document.body, script);
    });
  }
  
  /* <script src="https://maps.google.com/maps/api/js?key="></script> */
}
