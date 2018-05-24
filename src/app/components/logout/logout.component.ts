import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  tempUsername = this.loginServive.username;

  constructor(private loginServive: LoginService) { }

  ngOnInit() {
    this.loginServive.logout();
  }

}
