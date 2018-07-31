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

@NgModule({
   declarations: [
      AppComponent,
      SignupComponent,
      LoginComponent
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
