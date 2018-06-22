import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginButtonState = true;
  username: string;
  password: string;
  showHelp = false;
  wrongPwOrUser = false;
  loading = false;
  loggedIn = false;

  constructor( private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  checkLogin(e) {

    e.preventDefault();

    this.loginButtonState = !(this.username !== '' && this.username !== undefined &&
      this.password !== '' && this.password !== undefined);

    this.loginService.login(this.username, this.password);

    this.loading = true;

    this.loginService.isUserLoggedIn().subscribe((result) => {
      if (result) {
        this.router.navigate(['/']);
      } else {
        this.wrongPwOrUser = true;
      }
      this.loading = false;
    });



   /* setTimeout(() => {
      if (this.loginService.isUserLoggedIn()) {
        this.router.navigate(['/']);
      } else {
        this.wrongPwOrUser = true;
      }
      this.loading = false;
    }, 250); */

  }

  toggleHelp() {
    this.showHelp = !(this.showHelp);
  }

}
