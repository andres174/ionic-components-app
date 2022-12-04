import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Action Sheet', url: 'action-sheet', icon: 'albums' },
    { title: 'Accordion', url: 'accordion', icon: 'caret-down' },
    { title: 'Alert', url: 'alert', icon: 'alert-circle' },
    { title: 'Badge', url: 'badge', icon: 'mail-unread' },
    { title: 'Button', url: 'button', icon: 'radio-button-on' },
    { title: 'Card', url: 'card', icon: 'card' },
    { title: 'Checkbox', url: 'checkbox', icon: 'checkmark-circle' },
    { title: 'Date Time', url: 'datetime', icon: 'calendar' },
    { title: 'Fab', url: 'fab', icon: 'add-circle' },
    { title: 'Grid', url: 'grid', icon: 'grid' },
    { title: 'Infinite Scroll', url: 'infinite-scroll', icon: 'infinite' },
    { title: 'Input', url: 'input', icon: 'text' },
    { title: 'List - Item', url: 'list-item', icon: 'list' },
  ];
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router) {}

  nHome(){
    this.router.navigate(['/home'])
  }
}
