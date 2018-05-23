import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { Welcome } from './components/welcome/welcome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent} from "./components/footer/footer.component";
import { CoursesComponent } from './components/courses/courses.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { CourseListComponent } from "./components/course-list/course-list.component";
import { FavoritesListComponent } from "./components/favorites-list/favorites-list.component";




const appRoutes: Routes = [
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
    CoursesComponent,
    LocationsComponent,
    ScheduleComponent,
    FavoritesComponent,
    ProfileComponent,
    WelcomePageComponent,
    CourseListComponent,
    FavoritesListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


