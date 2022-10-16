import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template:
    `<style>
    .page-wrap {
        min-height: 80vh;
    }
  </style>
  <div class="page-wrap d-flex flex-row align-items-center">
    <div class="container text-white">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <span class="display-1 d-block text-dark">404</span>
                <div class="mb-4 lead text-dark">The page you are looking for was not found.</div>
                <a routerLink="/" class="btn btn-link">Back to Home</a>
            </div>
        </div>
    </div>
  </div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
