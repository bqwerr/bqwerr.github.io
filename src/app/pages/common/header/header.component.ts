import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  id: string;
  readonly headerItems: Array<string> = ['Education', 'Experience', 'Projects', 'Skills']

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  isActive(page: string) {
    return page == this.router.url;
  }

}
