import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  tempUsername = this.loginService.user_firstname;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.logout();
  }

}
