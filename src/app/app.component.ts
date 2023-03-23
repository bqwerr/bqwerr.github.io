import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from '../environments/environment';

declare const gtag: Function; // <------------Important: the declartion for gtag is required!

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
  constructor(private router: Router) {

    /** START : Code to Track Page View using gtag.js */
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects
      })
    });
    /** END : Code to Track Page View  using gtag.js */
  }
}
