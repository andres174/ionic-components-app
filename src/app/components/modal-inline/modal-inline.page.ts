import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-modal-inline',
  templateUrl: './modal-inline.page.html',
  styleUrls: ['./modal-inline.page.scss'],
})
export class ModalInlinePage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  message = 'Aquí podrás ver tu nombre.';
  name!: string;
  
  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

}
