import { DataApiService } from 'src/app/services/http/data-api.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  
  skills: any;
  featuredProjects: any;
  workExperience: any;
  education: any;
  activeSkillTab: string = 'All';
  profile: any;

  constructor(
    public dataApi: DataApiService,
  ) { }


  async ngOnInit(): Promise<void> {

    this.skills = await this.dataApi.getTopSkills();

    this.workExperience = await this.dataApi.getWorkHistory();

    this.education = await this.dataApi.getEducation();

    this.profile = await this.dataApi.getProfile();

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
