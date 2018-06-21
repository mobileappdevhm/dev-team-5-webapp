import { Component, OnInit, Input } from '@angular/core';
import { Favorites } from './favorites';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login/login.service';

import { SERVER_URL } from '../../app.constants';
import { DescriptionComponent } from '../description/description.component';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})


export class FavoritesListComponent implements OnInit {


  // URLs for API Request
  readonly SERVER_URL = 'http://10.179.9.3:3000';
  //readonly SERVER_URL = 'https://my-json-server.typicode.com/ShaggyBlanco/fakejsondb/courses';

  // letiables
  favorites: Observable<Favorites[]>
  favList: Favorites[] = [];
  favLoth: Favorites[] = [];
  favKarls: Favorites[] = [];
  favPasing: Favorites[] = [];

  x: number = 0;

  username: any = '';


  constructor(private http: HttpClient, private loginService: LoginService) {

  }


  getFavorites() {
    this.favList = [];

    this.http.get(SERVER_URL + '/Course').subscribe(data => {
      //this.http.get(this.SERVER_URL).subscribe(data => {

      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.favList.push(data[key]);
        }
      };
    });

  }

  rmFromFav(param: Favorites) {

    this.http.delete(this.SERVER_URL + '/Course/' + param.id)
      .subscribe(res => {
        console.log(res);
        this.getFavorites();
      },
        err => {
          console.log("Error occured!");
        });



  }

  checkTimeConflict() {

    let date_array_Loth = [];
    let date_array_Karls = [];
    let date_array_Pasing = [];


    // ******** filtern nach location ********
    if (this.x == 0) {
      for (let entry of this.favList) {
        if (entry.CourseLocation == "Lothstrasse") {
          this.favLoth.push(entry);
          console.log("Lothstrasse");
          console.log(this.favLoth);
        }
        if (entry.CourseLocation == "Karlstrasse") {
          this.favKarls.push(entry);
        }
        if (entry.CourseLocation == "Pasing") {
          this.favPasing.push(entry);
        }
      }
      this.x = this.x + 1;
    }
    // ****************************************

    // ********* filtern der einzelnen locations (Lothstraße) *********
    if (this.favLoth.length != 0) {
      for (let entry1 of this.favLoth) {

        let tempDate = this.parseDate(entry1.CourseStart);

        date_array_Loth.push(tempDate);

      }

      // sort Date array in descending order
      date_array_Loth.sort((a, b) => a - b);



      // check if Timeconflict
      for (var i = 0; i < date_array_Loth.length - 1; i++) {
        for (var j = 1; j < date_array_Loth.length; j++) {
          if (String(date_array_Loth[i].getDay()) === String(date_array_Loth[j].getDay())) {
            if (String(date_array_Loth[i].getHours()) === String(date_array_Loth[j].getHours())) {
              if (String(date_array_Loth[i].getMinutes()) === String(date_array_Loth[j].getMinutes())) {
                console.log("TIME CONFLICT IN COURSES LOTHSTRASSE!")
              }
            }
          }


          // with Date object, elements like Day, Hours and Minutes could be accessed with built-in get Function from Date
          console.log('Day: ' + String(date_array_Loth[i].getDay()) + '\n' +     // Days are numbered, e.g. 1(monday)...7(sunday)
            'Hour: ' + String(date_array_Loth[i].getHours()) + '\n' +
            'Minute: ' + String(date_array_Loth[i].getMinutes()))

        }

      }
      // ***********************************************************************
    }

    // ********* filtern der einzelnen locations (Karls)*********
    if (this.favKarls.length != 0) {
      for (let entry1 of this.favKarls) {

        let tempDate = this.parseDate(entry1.CourseStart);

        date_array_Karls.push(tempDate);

      }

      // sort Date array in descending order
      date_array_Karls.sort((a, b) => a - b);

      // check if Timeconflict
      for (var i = 0; i < date_array_Karls.length - 1; i++) {

        for (var j = 1; j < date_array_Karls.length; j++) {

          if (String(date_array_Karls[i].getDay()) == String(date_array_Karls[j].getDay())) {
            if (date_array_Karls[i].getHours() == date_array_Karls[j].getHours()) {
              if (date_array_Karls[i].getMinutes() == date_array_Karls[j].getMinutes()) {
                console.log("TIME CONFLICT IN COURSES KARLSTRASSE!")
              }
            }
          }
        }
      }
    }
    // ***********************************************************************


    // *************** filtern der einzelnen locations (Pasing)***************
    if (this.favPasing.length != 0) {
      for (let entry2 of this.favPasing) {

        let tempDate = this.parseDate(entry2.CourseStart);

        date_array_Pasing.push(tempDate);

      }

      // sort Date array in descending order
      date_array_Pasing.sort((a, b) => a - b);

      // check if Timeconflict
      for (var i = 0; i < date_array_Pasing.length - 1; i++) {

        for (var j = 1; j < date_array_Pasing.length; j++) {

          if (date_array_Pasing[i].getDay() == date_array_Pasing[j].getDay()) {
            if (date_array_Pasing[i].getHours() == date_array_Pasing[j].getHours()) {
              if (date_array_Pasing[i].getMinutes() == date_array_Pasing[j].getMinutes()) {
                console.log("TIME CONFLICT IN COURSES PASING!")
              }
            }
          }
        }
      }
    }
    // ***********************************************************************

    // *************** filtern der Zeitkonflikte untereinander ***************
    if (this.favLoth.length != 0 && this.favKarls.length != 0) {
      for (var i = 0; i < date_array_Loth.length; i++) {
        for (var j = 0; i < date_array_Karls.length; j++) {

          if (date_array_Loth[i].getDay() == date_array_Karls[j].getDay()) {
            if (date_array_Loth[i].getHours() == date_array_Karls[j].getHours()) {
              if (date_array_Loth[i].getMinutes() == date_array_Karls[j].getMinutes()) {
                console.log("TIME CONFLICT IN COURSES!")
              }
            }
          }
        }
      }
    }

    if (this.favLoth.length != 0 && this.favPasing.length != 0) {
      for (var i = 0; i < date_array_Loth.length; i++) {
        for (var j = 0; i < date_array_Pasing.length; j++) {
          if (date_array_Loth[i].getDay() == date_array_Pasing[j].getDay()) {
            if (date_array_Loth[i].getHours() == date_array_Pasing[j].getHours()) {
              if (date_array_Loth[i].getMinutes() == date_array_Pasing[j].getMinutes()) {
                console.log("TIME CONFLICT IN COURSES!")
              }
            }
          }
        }
      }
    }

    if (this.favKarls.length != 0 && this.favPasing.length != 0) {
      for (var i = 0; i < date_array_Karls.length; i++) {
        for (var j = 0; i < date_array_Pasing.length; j++) {
          if (date_array_Karls[i].getDay() == date_array_Pasing[j].getDay()) {
            if (date_array_Karls[i].getHours() == date_array_Pasing[j].getHours()) {
              if (date_array_Karls[i].getMinutes() == date_array_Pasing[j].getMinutes()) {
                console.log("TIME CONFLICT IN COURSES!")
              }
            }
          }
        }
      }
    }

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

  }
  // ******************************************************************************************

  /*
    Function to parse date string fetched from json element. 
    Returns a formatted Date object that is readable for Typescript.
   */
  parseDate(param: String): Date {

    // example for param: "20180321T164500Z";
    let year = param.substring(0, 4);
    let month = param.substring(4, 6);
    let day = param.substring(6, 8);
    let hour = param.substring(9, 11);
    let minute = param.substring(11, 13);
    let seconds = param.substring(13, 15);

    // concatenate substrings above to a date string with format 'yyyy-mm-ddTHH:mm:ss'
    let res = year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + seconds;

    // create a Date object from 'res' string
    let date = new Date(res);

    return date;
  }



  ngOnInit() {
    this.getFavorites()


  }
}

