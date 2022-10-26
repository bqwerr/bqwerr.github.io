import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataApiService } from 'src/app/services/http/data-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  profile: any = null;
  url: string = null;

  constructor(
    private dataApi: DataApiService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.dataApi.getProfile().subscribe(res => this.profile = res);
    this.url = this.router.url;
  }

  showAbout() {
    return !((this.url == '/about') || (this.url == '/') || (this.url == '/skills'));
  }

}
