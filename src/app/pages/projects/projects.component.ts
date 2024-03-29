import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/http/data-api.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: []
})
export class ProjectsComponent implements OnInit {

  projects: any;
  activeProjectsTab: string = "All";
  activeProject: any = null;
  readonly categories: Array<string> = ['All', 'Backend', "AI/ML", "Full Stack", "Mobile"]

  constructor(
    private dataApi: DataApiService,
  ) { }


  async ngOnInit(): Promise<void> {
    this.dataApi.getFeaturedProjects().subscribe(res => this.projects = res);
  }

  filterProjects(tag: string) {
    this.projects = this.projects.filter((obj: any) => {
      return tag in obj.tags;
    });
  }

  setProjectsTab(category: string) {
    this.activeProjectsTab = category;
  }

  isProjectTabActive(category: string) {
    return this.activeProjectsTab == category;
  }

  getActiveProjects() {
    if (this.activeProjectsTab == 'All') return this.projects?.projects;
    return this.projects?.projects.filter((obj: any) => {
      for (let tag of obj.tags) {
        if (tag.includes(this.activeProjectsTab)) return true;
      }
      return false;
    });
  }

  showProjectDetails(project: any) {
    this.activeProject = project;
  }

  hideProjectDetails() {
    this.activeProject = null;
  }

}
