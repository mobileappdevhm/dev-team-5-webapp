import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _username:string = '';

  constructor() { }

  get username(): string {
    if (this._username === '' || this._username === undefined || this._username === null) {
      this._username = localStorage.getItem('username');
    }
    return this._username;
  }

  set username(value: string) {
    localStorage.setItem('username', value);
    this._username = value;
  }

  logout(){
    this.username = '';
  }
}
