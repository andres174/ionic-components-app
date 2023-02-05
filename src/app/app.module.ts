import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http'
import { PipeModule } from './pipe/pipe.module';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { Camera } from '@awesome-cordova-plugins/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, PipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Geolocation, Camera, ],
  bootstrap: [AppComponent],
})
export class AppModule {}
