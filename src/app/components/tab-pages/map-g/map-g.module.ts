import { MapPage } from './../map/map.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapGPageRoutingModule } from './map-g-routing.module';

import { MapGPage } from './map-g.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapGPageRoutingModule
  ],
  declarations: [MapGPage],
  exports:[
    MapGPage
  ]
})
export class MapGPageModule {}
