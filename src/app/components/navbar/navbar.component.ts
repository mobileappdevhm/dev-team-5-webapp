import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuCheckbox:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  menuChanged() {
      this.menuCheckbox=false;
  }

}
