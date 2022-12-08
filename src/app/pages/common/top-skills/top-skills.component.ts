import { DataApiService } from 'src/app/services/http/data-api.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-top-skills',
  templateUrl: './top-skills.component.html',
  styleUrls: []
})
export class TopSkillsComponent implements OnInit {
  
  skills: any;
  activeSkillTab: string = 'All';

  constructor(
    private dataApi: DataApiService,
  ) { }


  async ngOnInit(): Promise<void> {
    this.dataApi.getTopSkills().subscribe(res => this.skills = res);

  }

  getActiveCategory() {
    if (this.activeSkillTab == 'All') return this.skills.skills;
    return this.skills.skills.filter((obj: any) => {
      let title = obj.title;
      return title.includes(this.activeSkillTab); 
    });
  }

  setActiveCategory(category: string) {
    this.activeSkillTab = category;
  }

  isSkillTabActive(category: string) {
    return this.activeSkillTab == category;
  }

}
