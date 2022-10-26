import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/http/data-api.service';

@Component({
  selector: 'app-experience',
  template:
    `
    
    <br />
    <div class="container">
      <div class="row pt-1">
        <div class="col-4">
          <app-about></app-about>
        </div>
        <div class="col-8">
          <div class="row mt-3">
            <div class="col-11 offset-1">
              <app-timeline [details] = experience [icon] = workIcon></app-timeline>
            </div>
          </div>
        </div>
    </div>
    
    `,
  styles: []
})
export class ExperienceComponent implements OnInit {

  experience: any;
  workIcon: string = "people-sharp";

  constructor(
    private dataApi: DataApiService,
  ) { }

  async ngOnInit() {
    this.dataApi.getWorkHistory().subscribe(res => this.experience = res);
  }

}
