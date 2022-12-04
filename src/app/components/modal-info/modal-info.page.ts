import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  @Input() nombre: any;
  @Input() pais: any;
  


  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  enviar(){
    this.modalCtrl.dismiss({
      nombre: 'Fernando',
      pais: 'Ecuador'
    });
  }

}
