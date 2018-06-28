import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from './IUser';
import { API_LOGIN } from '../../app.constants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _userid = '';
  private _user_firstname = '';
  private _user_lastname = '';
  private _user_curriculum = '';

  userData: IUser;
  private loggedIn = new Subject<any>();

  constructor( private http: HttpClient ) {

  }

  static saveToLocalStorage(key, data) {

    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    sessionStorage.setItem(key, data);
  }

  login(username, password) {

    const requestBody = {
      username: username,
      password: password
    };

    this.http.post(API_LOGIN, requestBody).subscribe( (result: IUser) => {
      if (result.user !== null) {
        this.userData = result;
        LoginService.saveToLocalStorage('userData', this.userData);
        this.userid = this.userData.user.id;
        this.user_firstname = this.userData.user.firstName;
        this.user_lastname = this.userData.user.lastName;
        this.user_curriculum = this.userData.curriculum;
        this.loggedIn.next(true);
      } else {
        LoginService.saveToLocalStorage('userData', this.userData);
        this.userData = null;
        this.loggedIn.next(false);
      }
    });
  }

  isUserLoggedIn() {
    this.loggedIn.next(sessionStorage.getItem('userid') !== '' &&
      sessionStorage.getItem('userid') !== undefined &&
      sessionStorage.getItem('userid') !== null);

    return this.loggedIn.asObservable();

  }

  logout() {
    this.loggedIn.next(false);
    sessionStorage.clear();
  }


  // GETTERS AND SETTERS

  get userid(): string {
    if (this._userid === '' || this._userid === undefined || this._userid === null) {
      this._userid = sessionStorage.getItem('userid');
    }
    return this._userid;
  }

  set userid(value: string) {
    sessionStorage.setItem('userid', value);
    this._userid = value;
  }

  get user_firstname(): string {
    if (this._user_firstname === '' || this._user_firstname === undefined || this._user_firstname === null) {
      this._user_firstname = sessionStorage.getItem('user_firstname');
    }
    return this._user_firstname;
  }

  set user_firstname(value: string) {
    sessionStorage.setItem('user_firstname', value);
    this._user_firstname = value;
  }


  get user_lastname(): string {
    if (this._user_lastname === '' || this._user_lastname === undefined || this._user_lastname === null) {
      this._user_lastname = sessionStorage.getItem('user_lastname');
    }
    return this._user_lastname;
  }

  set user_lastname(value: string) {
    sessionStorage.setItem('user_lastname', value);
    this._user_lastname = value;
  }


  get user_curriculum(): string {
    if (this._user_curriculum === '' || this._user_curriculum === undefined || this._user_curriculum === null) {
      this._user_curriculum = sessionStorage.getItem('user_curriculum');
    }
    return this._user_curriculum;
  }

  set user_curriculum(value: string) {
    sessionStorage.setItem('user_curriculum', value);
    this._user_curriculum = value;
  }
}
