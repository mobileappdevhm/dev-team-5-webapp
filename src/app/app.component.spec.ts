import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { Router, RouterModule, Routes } from "@angular/router";
import { routing } from "./app.routing"
import { FormsModule } from "@angular/forms";

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
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from "./components/logout/logout.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DescriptionComponent } from "./components/description/description.component";
import { SecurityComponent } from './components/security/security.component';

describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FavoritesListComponent,
        CourseListComponent,
        WelcomePageComponent,
        ProfileComponent,
        ScheduleComponent,
        LocationsComponent,
        PageNotFoundComponent,
        FooterComponent,
        NavbarComponent,
        LoginComponent,
        LogoutComponent,
        Welcome,
        AppComponent,
        ContactComponent,
        DescriptionComponent,
        SecurityComponent
      ],
      imports: [
        AgmCoreModule.forRoot(),
        FormsModule,
        routing,
        HttpClientModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);

  });

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to "", if not logged in', fakeAsync(() => {
    router.navigate(['']);
    tick(50);
    expect(location.path()).toBe('');
  }));

  it('navigate to /login redirects you to /login', fakeAsync(() => {
    router.navigate(['/login']);
    tick(50);
    expect(location.path()).toBe('/login');
  }));

  it('navigate to /logout redirects you to /logout', fakeAsync(() => {
    router.navigate(['/logout']);
    tick(50);
    expect(location.path()).toBe('/logout');
  }));

  /*it('navigate to /login/welcome redirects you to /login/welcome', fakeAsync(() => {
    router.navigate(['/login/welcome']);
    tick(50);
    expect(location.path()).toBe('/login/welcome');
  }));*/

  it('navigate to /courses redirects you to /courses', fakeAsync(() => {
    router.navigate(['/courses']);
    tick(50);
    expect(location.path()).toBe('/courses');
  }));

  it('navigate to /security redirects you /security', fakeAsync(() => {
    router.navigate(['/security']);
    tick(50);
    expect(location.path()).toBe('/security');
  }));

  it('navigate to /favorites redirects you to /favorites', fakeAsync(() => {
    router.navigate(['/favorites']);
    tick(50);
    expect(location.path()).toBe('/favorites');
  }));

  it('navigate to /locations redirects you to /locations', fakeAsync(() => {
    router.navigate(['/locations']);
    tick(50);
    expect(location.path()).toBe('/locations');
  }));

  it('navigate to /profile redirects you to /profile', fakeAsync(() => {
    router.navigate(['/profile']);
    tick(50);
    expect(location.path()).toBe('/profile');
  }));

  it('navigate to /schedule redirects you to /schedule', fakeAsync(() => {
    router.navigate(['/schedule']);
    tick(50);
    expect(location.path()).toBe('/schedule');
  }));

  it('navigate to ** redirects you to **', fakeAsync(() => {
    router.navigate(['/**']);
    tick(50);
    expect(location.path()).toBe('/**');
  }));

});
