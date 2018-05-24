import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginButtonState:boolean=true;
  username:string;
  password:string;
  showHelp:boolean=false;

  constructor( private loginService: LoginService, private router: Router) { }

  ngOnInit() {

    if(this.loginService.username !== '') {
      this.router.navigate(['/login/welcome']);
    }

  }

  checkLogin(){
    this.loginButtonState = !(this.username !== '' && this.username !== undefined &&
      this.password !== '' && this.password !== undefined);

    this.loginService.username = this.username;
  }

  toggleHelp() {
    this.showHelp = !(this.showHelp);
  }

}
