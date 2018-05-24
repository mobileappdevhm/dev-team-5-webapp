import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class Welcome implements OnInit {

  username:any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.username = this.loginService.username;
  }
}
