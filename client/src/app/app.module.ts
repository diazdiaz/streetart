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
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { FileSelectDirective } from "ng2-file-upload";
import { WorksListComponent } from './works-list/works-list.component';
import { ArtistsComponent } from './artists/artists.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
   declarations: [
      AppComponent,
      SignupComponent,
      LoginComponent,
      WorksComponent,
      HomeComponent,
      FileSelectDirective,
      WorksListComponent,
      ArtistsComponent


   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpModule,
      FormsModule,
      ClarityModule,
      BrowserAnimationsModule
   ],
   providers: [SessionService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
