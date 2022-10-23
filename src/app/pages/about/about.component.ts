import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataApiService } from 'src/app/services/http/data-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  profile: any = null;

  constructor(
    public dataApi: DataApiService,
  ) { }

  async ngOnInit() {
    this.dataApi.getProfile().subscribe(res => this.profile = res);
  }

}
