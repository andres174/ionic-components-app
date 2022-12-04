import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {
  
  @ViewChild('lista') lista!: IonList;

  usuarios!: any; 

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(user:any){
    console.log('favorite', user);
    //cerrar el sliding
    this.lista.closeSlidingItems();

  }
  share(user:any){
    console.log('share', user);
    //cerrar el sliding
    this.lista.closeSlidingItems();

  }
  borrar(user:any){
    console.log('borrar', user);
    //cerrar el sliding
    this.lista.closeSlidingItems();
    //en el caso del borrar en un caso normal al borrar el elemento de la lista se recarga 
  }

}
