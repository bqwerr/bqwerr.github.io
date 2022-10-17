import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/common/page-not-found/page-not-found.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LoginComponent } from './pages/common/login/login.component';
import { PopUpComponent } from './pages/common/pop-up/pop-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: HomeComponent },
  { path: 'skills', component: HomeComponent },
  // { path: 'pop', component: PopUpComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
