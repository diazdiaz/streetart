import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { HttpModule } from "@angular/http";
import { SessionService } from "services/session";
import { FormsModule } from "@angular/forms";
import { ClarityModule, ClrFormsNextModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WorksComponent } from "./Components/works/works.component";
import { WorksListComponent } from "./Components/works-list/works-list.component";
import { ArtistsComponent } from "./Components/artists/artists.component";
import { SignupComponent } from "./Components/signup/signup.component";
import { LoginComponent } from "./Components/login/login.component";
import { isLoggedInGuardService } from "./guards/isLoggedIn.guard";
import { WorksService } from "services/works";
import { EditProfileComponent } from "./Components/user/edit-profile/edit-profile.component";
import { UserProfileComponent } from "./Components/user/user-profile/user-profile.component";
import { UserService } from "services/user";
import { IndividualArtistComponent } from "./Components/individual-artist/individual-artist.component";
import { FullInfoComponent } from "./Components/full-info/full-info.component";
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WorksComponent,
    WorksListComponent,
    ArtistsComponent,
    EditProfileComponent,
    UserProfileComponent,
    IndividualArtistComponent,
    FullInfoComponent,
   
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    ClrFormsNextModule,
    FileUploadModule
  ],
  providers: [
      SessionService,
      isLoggedInGuardService,
      WorksService,
      UserService
],
  bootstrap: [AppComponent]
})
export class AppModule {}
