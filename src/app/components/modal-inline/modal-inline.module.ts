import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInlinePageRoutingModule } from './modal-inline-routing.module';

import { ModalInlinePage } from './modal-inline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInlinePageRoutingModule
  ],
  declarations: [ModalInlinePage]
})
export class ModalInlinePageModule {}
