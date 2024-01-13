import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { LoginComponent } from './pages/common/login/login.component';
import { PageNotFoundComponent } from './pages/common/page-not-found/page-not-found.component';
import { PopUpComponent } from './pages/common/pop-up/pop-up.component';
import { TimeLineComponent } from './pages/common/timeline/timeline.component';
import { TopSkillsComponent } from './pages/common/top-skills/top-skills.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { SafePipe } from './pipes/safe.pipe';
import { DataApiService } from './services/http/data-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    TimeLineComponent,
    EducationComponent,
    ExperienceComponent,
    AboutComponent,
    ProjectsComponent,
    LoginComponent,
    PopUpComponent,
    SafePipe,
    SkillsComponent,
    TopSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
  ],
  providers: [
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
