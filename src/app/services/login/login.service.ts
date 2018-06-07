import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { IUser } from './IUser';
import { API_LOGIN } from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _userid:string = '';
  private _user_firstname:string = '';
  private _user_lastname:string = '';
  private _user_curriculum:string = '';


  userData:IUser;
  loggedIn:boolean = false;


  constructor( private http: HttpClient ) { }



  saveToLocalStorage(key, data) {

    if(typeof data !== "string") {
      data = JSON.stringify(data);
    }
    sessionStorage.setItem(key, data);
  }

  getfromLocalStorage(key){

    let data = sessionStorage.getItem(key);
    try
    {
      return JSON.parse(data);
    }
    catch(e)
    {
      return data;
    }
  }


  login(username, password) {

    const requestBody = {
      username: username,
      password: password
    };

    this.http.post(API_LOGIN, requestBody).subscribe( (result:IUser) => {
      if(result.user !== null) {
        this.userData = result;
        this.loggedIn = true;
        this.saveToLocalStorage('userData', this.userData);
        this.userid = this.userData.user.id;
        this.user_firstname = this.userData.user.firstName;
        this.user_lastname = this.userData.user.lastName;
        this.user_curriculum = this.userData.curriculum;
      } else {
        this.saveToLocalStorage('userData', this.userData);
        this.userData = null;
        this.loggedIn = false;
      }
    });
  }

  isUserLoggedIn(){
    return sessionStorage.getItem('userid') !== '' && sessionStorage.getItem('userid') !== undefined && sessionStorage.getItem('userid') !== null;
  }

  logout(){
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
