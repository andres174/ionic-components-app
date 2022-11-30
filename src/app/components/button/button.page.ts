import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
  normal_button!:string;
  bool_normal_button:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  normalButton(){
    if (this.bool_normal_button == false) {
      this.normal_button = "Click en el botón normal.";
      this.bool_normal_button = true;
    } else {
      this.bool_normal_button = false;
      this.normal_button = "";
    }
  }

}
