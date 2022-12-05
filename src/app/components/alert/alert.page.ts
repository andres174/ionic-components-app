import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Ponte pilas ñaño!',
      subHeader: 'Mañana juega la Tri.',
      message: 'Deja de ver .....',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
