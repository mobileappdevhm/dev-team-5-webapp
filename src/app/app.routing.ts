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
import {ContactComponent} from "./components/contact/contact.component";
import {LogoutComponent} from "./components/logout/logout.component";
import { DescriptionComponent } from './components/description/description.component';
import { SecurityComponent } from'./components/security/security.component';

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
    path: 'security',
    component: SecurityComponent
  },
  {
    path: 'courses',
    component: CourseListComponent,
    canActivate: [AuthGuard]
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'locations',
    component: LocationsComponent,
    canActivate: [AuthGuard]
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    canActivate: [AuthGuard]
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'favorites',
    component: FavoritesListComponent,
    canActivate: [AuthGuard]
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path:'contact',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/descriptions/:id',
    component: DescriptionComponent,
    // data: { title: 'Hilfe zum Login' }
  },
  {
    path: 'favorites/descriptions/:id',
    component: DescriptionComponent,
    // data: { title: 'Hilfe zum Login' }
  },

  {path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
