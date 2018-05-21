import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { Welcome } from './components/welcome/welcome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent} from "./components/footer/footer.component";
import { CoursesComponent } from './components/courses/courses.component';
import { LocationsComponent } from './components/locations/locations.component';
import { SheduleComponent } from './components/shedule/shedule.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';



//neue Seite
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
    path: 'login/welcome/courses',
    component: CoursesComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'login/welcome/locations',
    component: LocationsComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'login/welcome/profile',
    component: ProfileComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'login/welcome/shedule',
    component: SheduleComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'login/welcome/favorites',
    component: FavoritesComponent,
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
    SheduleComponent,
    FavoritesComponent,
    ProfileComponent,
    WelcomePageComponent,

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
