import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapGPage } from './map-g.page';

const routes: Routes = [
  {
    path: '',
    component: MapGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapGPageRoutingModule {}
