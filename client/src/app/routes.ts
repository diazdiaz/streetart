import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'artistform', component:ArtistFormComponent},
  { path:'works', component:WorksComponent}
];
