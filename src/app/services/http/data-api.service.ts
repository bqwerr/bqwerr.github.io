import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private profile$: Observable<any> = null;
  private skills$: Observable<any> = null;
  private projects$: Observable<any> = null;
  private experience$: Observable<any> = null;
  private education$: Observable<any> = null;
  private certifications$: Observable<any> = null;
  private backendHost: string = environment.backendHost;

  constructor(
    private http: HttpClient
  ) { 
  }

  getProfile(): Observable<any> {
    if (this.profile$ == null)
      this.profile$ = this.http.get('assets/profile.json').pipe(shareReplay());
    return this.profile$;
  }

  getTopSkills(): Observable<any> {
    if (this.skills$ == null)
      this.skills$ = this.http.get('assets/top-skills.json').pipe(shareReplay());
    return this.skills$;
  }

  getFeaturedProjects(): Observable<any> {
    if (this.projects$ == null)
      this.projects$ = this.http.get('assets/projects.json').pipe(shareReplay());
    return this.projects$;
  }

  getWorkHistory(): Observable<any> {
    if (this.experience$ == null)
      this.experience$ = this.http.get('assets/work-experience.json').pipe(shareReplay());
    return this.experience$;
  }

  getEducation(): Observable<any> {
    if (this.education$ == null)
      this.education$ = this.http.get('assets/education.json').pipe(shareReplay());
    return this.education$;
  }

  getCertifications(): Observable<any> {
    if (this.certifications$ == null)
      this.certifications$ = this.http.get('assets/certifications.json').pipe(shareReplay());
    return this.certifications$;
  }

}