import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // menuCheckbox:boolean=false;
  collapse = 'closed';
  showNavBar = true;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.showNavBar = this.loginService.isUserLoggedIn();
  }

  toggleCollapse() {
    this.collapse = this.collapse === 'open' ? 'closed' : 'open';
  }

}
