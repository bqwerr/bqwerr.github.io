import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/http/data-api.service';

@Component({
  selector: 'app-education',
  template:
    `

    <br />
    <div class="container">
      <div class="row pt-1">
        <div class="col-lg-4">
          <app-about></app-about>
        </div>
        <div class="col-8">
          <div class="row mt-3">
            <div class="col-11 offset-1 pl-2">
              <app-timeline [details] = education [icon] = bookIcon></app-timeline>
            </div>
          </div>
        </div>
    </div>
        
    `,
  styles: []
})
export class EducationComponent implements OnInit {

  education: any;
  bookIcon: string = "book-sharp";

  constructor(
    public dataApi: DataApiService,
  ) { }

  async ngOnInit() {
    this.education = await this.dataApi.getEducation();
  }

}
