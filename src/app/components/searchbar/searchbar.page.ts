import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  constructor(private dataService:DataService) { }

  albums: any[] = [];
  text: string = '';

  ngOnInit() {
    this.dataService.getAlbums().subscribe( res => {
      console.log(res);
      this.albums = res;
    })
  }

  buscar(event:any){

    this.text = event.detail.value;

  }

}
