import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
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
  wrongPwOrUser:boolean=false;
  loading:boolean = false;

  constructor( private loginService: LoginService, private router: Router) { }

  ngOnInit() {

    if (this.loginService.isUserLoggedIn()) {
      //this.router.navigate(['/login/welcome']);
    }

  }

  checkLogin(e){

    e.preventDefault();
    this.loginButtonState = !(this.username !== '' && this.username !== undefined &&
      this.password !== '' && this.password !== undefined);

    this.loginService.login(this.username, this.password);

    this.loading = true;
    setTimeout(()=> {
      if(this.loginService.isUserLoggedIn()) {
        this.router.navigate(['/login/welcome']);
      } else {
        this.wrongPwOrUser = true;
      }
      this.loading = false;
    }, 250);

  }

  toggleHelp() {
    this.showHelp = !(this.showHelp);
  }

}
