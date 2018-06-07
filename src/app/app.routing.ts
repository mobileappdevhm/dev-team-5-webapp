import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './guards/auth.guard';
import {LocationsComponent} from "./components/locations/locations.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {LoginComponent} from "./components/login/login.component";
import {CourseListComponent} from "./components/course-list/course-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {Welcome} from "./components/welcome/welcome";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {FavoritesListComponent} from "./components/favorites-list/favorites-list.component";
import {LogoutComponent} from "./components/logout/logout.component";

const appRoutes: Routes = [

  {
    path: '',
    component: Welcome,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: 'logout',
    component: LogoutComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'login/welcome',
    component: Welcome,
    canActivate: [AuthGuard],
  },
  {
    path: 'welcome/courses',
    component: CourseListComponent,
    canActivate: [AuthGuard]
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'welcome/locations',
    component: LocationsComponent,
    canActivate: [AuthGuard]
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'welcome/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'welcome/schedule',
    component: ScheduleComponent,
    canActivate: [AuthGuard]
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'welcome/favorites',
    component: FavoritesListComponent,
    canActivate: [AuthGuard]
    // data: { title: 'Hilfe zum Login' }
  },

  {path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
