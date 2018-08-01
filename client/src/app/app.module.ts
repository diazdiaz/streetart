import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HttpModule } from '@angular/http';
import { SessionService } from 'services/session';
import { FormsModule } from '@angular/forms';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { FileSelectDirective } from "ng2-file-upload";
import { WorksListComponent } from './works-list/works-list.component';

@NgModule({
   declarations: [
      AppComponent,
      SignupComponent,
      LoginComponent,
      ArtistFormComponent,
      WorksComponent,
      HomeComponent,
      FileSelectDirective,
      WorksListComponent

   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpModule,
      FormsModule
   ],
   providers: [SessionService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
