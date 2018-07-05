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

  constructor( private loginService: LoginService, private router: Router) { }

  ngOnInit() {

    if (this.loginService.isUserLoggedIn()) {
      // this.router.navigate(['/login/welcome']);
    }

  }

  checkLogin(e) {

    e.preventDefault();
    this.loginButtonState = !(this.username !== '' && this.username !== undefined &&
      this.password !== '' && this.password !== undefined);

    this.loginService.login(this.username, this.password);

    this.loading = true;
    setTimeout(() => {
      if (this.loginService.isUserLoggedIn()) {
        this.router.navigate(['/']);
      } else {
        this.wrongPwOrUser = true;
      }
      this.loading = false;
    }, 250);

  }


  onKeydown(event) {
    if (event.key === 'Enter') {
      this.checkLogin(event);
    }
  }

  toggleHelp() {
    this.showHelp = !(this.showHelp);
  }

}
