import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  id: string;
  readonly headerItems: Array<string> = ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Reference']

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  isActive(page: string) {
    return page == this.router.url;
  }

}