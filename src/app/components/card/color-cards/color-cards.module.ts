import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorCardsPageRoutingModule } from './color-cards-routing.module';

import { ColorCardsPage } from './color-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorCardsPageRoutingModule
  ],
  declarations: [ColorCardsPage]
})
export class ColorCardsPageModule {}
