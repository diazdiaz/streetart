import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { HttpModule } from "@angular/http";
import { SessionService } from "services/session";
import { FormsModule } from "@angular/forms";
import { FileSelectDirective } from "ng2-file-upload";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WorksComponent } from "./Components/works/works.component";
import { WorksListComponent } from "./Components/works-list/works-list.component";
import { ArtistsComponent } from "./Components/artists/artists.component";
import { HomeComponent } from "./Components/home/home.component";
import { SignupComponent } from "./Components/signup/signup.component";
import { LoginComponent } from "./Components/login/login.component";
import { isLoggedInGuardService } from "./guards/isLoggedIn.guard";
import { WorksService } from "services/works";

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
  providers: [
      SessionService,
      isLoggedInGuardService,
      WorksService
],
  bootstrap: [AppComponent]
})
export class AppModule {}
