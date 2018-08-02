import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { WorksListComponent } from './works-list/works-list.component';
import { ArtistsComponent } from './artists/artists.component';


export const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'artists', component:ArtistsComponent},
 
  { path:'works', component:WorksComponent},
  { path:'workslist', component:WorksListComponent}
];
