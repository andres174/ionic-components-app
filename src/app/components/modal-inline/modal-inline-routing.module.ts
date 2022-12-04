import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInlinePage } from './modal-inline.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInlinePageRoutingModule {}
