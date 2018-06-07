import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login/login.service';
import { SERVER_URL } from "../../app.constants";
import { Schedule } from "./schedule";
import { getSchedules } from 'date-now';

@Component({
  selector: 'app-shedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  today = Date.now();
  readonly SERVER_URL ='http://10.179.33.4:3000';

  scheduleList: Schedule[] = [];

  username:string = '';

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.username = this.loginService.user_firstname;
  }

  getSchedules() {
    this.scheduleList = [];

    this.http.get(SERVER_URL + '/Course').subscribe(data => {

      for (let key in data) {
        if(data.hasOwnProperty(key)) {
          this.scheduleList.push(data[key]);
        }
      }

    });
  }



  ngOnInit() {
    this.getSchedules();
  }

  ngOnChange(){
    this.today;
  }

}
