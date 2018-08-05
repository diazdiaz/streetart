import { Routes } from '@angular/router';

import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { ArtistsComponent } from './Components/artists/artists.component';
import { WorksComponent } from './Components/works/works.component';
import { WorksListComponent } from './Components/works-list/works-list.component';
import { NegateNonUserGuard } from './guards/negateNonUser.guard';
import { isLoggedInGuardService } from './guards/isLoggedIn.guard';
import { UserProfileComponent } from './Components/user/user-profile/user-profile.component';
import { EditProfileComponent } from './Components/user/edit-profile/edit-profile.component';





export const routes: Routes = [
  

  { path:'', component:SignupComponent},
  { path:'login', component:LoginComponent },
  { path:'artists', component:ArtistsComponent },
  { path:'works', component:WorksComponent  },
  { path:'workslist', component:WorksListComponent, canActivate:[isLoggedInGuardService]},
  { path:'profile', component:UserProfileComponent},
  { path:'profile/edit/:id', component:EditProfileComponent},

  { path: '**', redirectTo: '' }
];
