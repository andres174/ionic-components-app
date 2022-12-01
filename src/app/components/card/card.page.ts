import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  t!:string;
  bool_t:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  normalt(){
    if (this.bool_t == false) {
      this.t = "Cambiaste el texto con un botón.";
      this.bool_t = true;
    } else {
      this.bool_t = false;
      this.t = "";
    }
  }

  colorCard(){
    this.router.navigate(['/card/color-cards'])
  }

}
