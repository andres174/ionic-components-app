import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorCardsPage } from './color-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ColorCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorCardsPageRoutingModule {}
