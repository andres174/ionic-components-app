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
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router) {}

  nHome(){
    this.router.navigate(['/home'])
  }
}
