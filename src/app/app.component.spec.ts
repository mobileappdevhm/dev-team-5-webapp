import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { Router, RouterModule, Routes } from "@angular/router";
import { appRoutes } from "./app.module"
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
        AppComponent
      ],
      imports: [ AgmCoreModule.forRoot(), FormsModule, RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
      ), 
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

  it('navigate to "" redirects you to /login', fakeAsync(() => {
    router.navigate(['']);
    tick(50);
    expect(location.path()).toBe('/login');
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

  it('navigate to /login/welcome redirects you to /login/welcome', fakeAsync(() => {
    router.navigate(['/login/welcome']);
    tick(50);
    expect(location.path()).toBe('/login/welcome');
  }));

  it('navigate to welcome/courses redirects you to welcome/courses', fakeAsync(() => {
    router.navigate(['/welcome/courses']);
    tick(50);
    expect(location.path()).toBe('/welcome/courses');
  }));

  it('navigate to welcome/favorites redirects you to welcome/favorites', fakeAsync(() => {
    router.navigate(['/welcome/favorites']);
    tick(50);
    expect(location.path()).toBe('/welcome/favorites');
  }));

  it('navigate to /welcome/locations redirects you to welcome/locations', fakeAsync(() => {
    router.navigate(['/welcome/locations']);
    tick(50);
    expect(location.path()).toBe('/welcome/locations');
  }));

  it('navigate to /welcome/profile redirects you to /welcome/profile', fakeAsync(() => {
    router.navigate(['/welcome/profile']);
    tick(50);
    expect(location.path()).toBe('/welcome/profile');
  }));

  it('navigate to /welcome/schedule redirects you to /welcome/schedule', fakeAsync(() => {
    router.navigate(['/welcome/schedule']);
    tick(50);
    expect(location.path()).toBe('/welcome/schedule');
  }));

  it('navigate to ** redirects you to **', fakeAsync(() => {
    router.navigate(['/**']);
    tick(50);
    expect(location.path()).toBe('/**');
  }));

});
