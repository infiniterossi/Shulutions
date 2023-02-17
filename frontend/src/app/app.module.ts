import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './pages/update-user-profile/update-user-profile.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ViewProjectComponent } from './pages/view-project/view-project.component';
import { ProjectRequestComponent } from './pages/project-request/project-request.component';
import { ProjectRequestFormComponent } from './components/project-request-form/project-request-form.component';
import { GithubStatsComponent } from './components/github-stats/github-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UpdateUserProfileComponent,
    ProjectsComponent,
    AllProjectsComponent,
    CreateProjectComponent,
    ViewProjectComponent,
    ProjectRequestComponent,
    ProjectRequestFormComponent,
    GithubStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [JwtHelperService, 
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
