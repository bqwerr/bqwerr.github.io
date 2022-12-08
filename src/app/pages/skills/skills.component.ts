
import { Component, OnInit, HostListener } from '@angular/core';
import { DataApiService } from 'src/app/services/http/data-api.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  certifications: any;

  constructor(
    private dataApi: DataApiService,
  ) { }


  async ngOnInit(): Promise<void> {
    this.dataApi.getCertifications().subscribe(res => this.certifications = res);
  }
}
