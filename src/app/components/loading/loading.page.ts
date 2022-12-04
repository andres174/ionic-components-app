import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  cargando!:any;

  constructor(private loadingCtrl:LoadingController) { }

  ngOnInit() {

    this.showLoading('Cargando...');

    setTimeout(() => {
      this.cargando.dismiss();
    }, 1500);

  }

  async showLoading(message:string) {
    this.cargando = await this.loadingCtrl.create({
      message,
      /* duration: 3000, */
    });

    this.cargando.present();
  }

}
