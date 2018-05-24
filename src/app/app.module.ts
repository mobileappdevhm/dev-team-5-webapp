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

import { AgmCoreModule } from '@agm/core';
import { LogoutComponent } from './components/logout/logout.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'login/welcome',
    component: Welcome,
    data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'login',
    component: LoginComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'login/welcome',
    component: NavbarComponent,
    // data: { title: 'Hilfe zum Login' }
  },

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'welcome/courses',
    component: CourseListComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'welcome/locations',
    component: LocationsComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'welcome/profile',
    component: ProfileComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'welcome/schedule',
    component: ScheduleComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'welcome/favorites',
    component: FavoritesListComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  { path: '**', component: PageNotFoundComponent }
];

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
    LogoutComponent
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


