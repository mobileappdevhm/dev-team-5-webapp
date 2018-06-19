import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { Welcome } from './components/welcome/welcome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent} from "./components/footer/footer.component";
import { LocationsComponent } from './components/locations/locations.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { CourseListComponent } from "./components/course-list/course-list.component";
import { FavoritesListComponent } from "./components/favorites-list/favorites-list.component";
import { ContactComponent } from "./components/contact/contact.component";

import { AgmCoreModule } from '@agm/core';
import { LogoutComponent } from './components/logout/logout.component';
import { routing } from "./app.routing";
import { DescriptionComponent } from './components/description/description.component';
import { SecurityComponent } from './components/security/security.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    Welcome,
    NavbarComponent,
    FooterComponent,
    LocationsComponent,
    ScheduleComponent,
    ProfileComponent,
    WelcomePageComponent,
    CourseListComponent,
    FavoritesListComponent,
    ContactComponent,
    LogoutComponent,
    DescriptionComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDt7-VrmG9zjcZWa1yRkDP4hC6OgvtRx9Y'
    }),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


