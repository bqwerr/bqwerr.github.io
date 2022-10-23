import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { LoginComponent } from './pages/common/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/common/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { DataApiService } from './services/http/data-api.service';
import { CommonModule } from '@angular/common'; // do not remove this
import { TimeLineComponent } from './pages/common/timeline/timeline.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { IonicModule } from '@ionic/angular';
import { PopUpComponent } from './pages/common/pop-up/pop-up.component';
import { SafePipe } from './pipes/safe.pipe';

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
    SafePipe
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
