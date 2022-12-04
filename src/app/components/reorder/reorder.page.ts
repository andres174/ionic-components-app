import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Wonder Woman'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event:any){
    /* console.log(event);
    console.log(this.personajes); */

    event.detail.complete();

    const itemMove = this.personajes.splice(event.detail.from, 1)[0];

    this.personajes.splice(event.detail.to, 0, itemMove);

    /* console.log(this.personajes); */
  }

  onClick(){
    console.log(this.personajes);
  }

}
