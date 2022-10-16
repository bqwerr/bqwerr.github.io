import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ion-content>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </ion-content>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
}
