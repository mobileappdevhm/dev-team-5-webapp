import { Component, OnInit, Input } from '@angular/core';
import { Favorites } from './favorites';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login/login.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import { SERVER_URL } from '../../app.constants';
import { DescriptionComponent } from '../description/description.component';
import { DatePipe, formatDate } from '@angular/common';
import { tempDate } from './tempDate';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})


export class FavoritesListComponent implements OnInit {


  // URLs for API Request
  //readonly SERVER_URL = 'http://10.179.9.3:3000';
  readonly SERVER_URL = 'https://my-json-server.typicode.com/ShaggyBlanco/fakejsondb/courses';

  // letiables
  favorites: Observable<Favorites[]>
  favList: Favorites[] = [];
  favLoth: tempDate[] = [];
  favKarls: tempDate[] = [];
  favPasing: tempDate[] = [];

  x: number = 0;

  report: String[] = [];
  buttonClicked: boolean = false;

  username: any = '';


  constructor(private http: HttpClient, private loginService: LoginService,private modalService: NgbModal) {

  }

  openVerticallyCentered(content) {
    this.emptyReport()
    this.modalService.open(content, { centered: true });
  }

  getFavorites() {
    this.favList = [];

    //this.http.get(this.SERVER_URL + '/Course').subscribe(data => {
      this.http.get(this.SERVER_URL).subscribe(data => {

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

  emptyReport() {
    this.report = [];
  }

  checkTimeConflict() {


    // ******** filtern nach location ********
    if (this.x == 0) {
      for (let entry of this.favList) {
        if (entry.CourseLocation == "Lothstrasse") {
          let myDate = new tempDate(entry.CourseLocation,entry.CourseName,
            this.parseDate(entry.CourseStart),this.parseDate(entry.CourseEnd));
          this.favLoth.push(myDate);
        }
        if (entry.CourseLocation == "Karlstrasse") {
          let myDate = new tempDate(entry.CourseLocation,entry.CourseName,
            this.parseDate(entry.CourseStart),this.parseDate(entry.CourseEnd));
          this.favKarls.push(myDate);
        }
        if (entry.CourseLocation == "Pasing") {
          let myDate = new tempDate(entry.CourseLocation,entry.CourseName,
            this.parseDate(entry.CourseStart),this.parseDate(entry.CourseEnd));
          this.favPasing.push(myDate);
        }
      }
      this.x = this.x + 1;
    }
    // ***********************************************************************


    this.favLoth.sort(function(a,b) {
      return (a.start > b.end) ? 1 : ((b.start > a.start) ? -1 : 0);
    });

    //console.log(this.favLoth);

          // check if Timeconflict
      for (var i = 0; i < this.favLoth.length - 1; i++) {
        for (var j = i+1; j < this.favLoth.length; j++) {
          if (this.favLoth[i].start.getDay() === this.favLoth[j].start.getDay()) {

            let tempEndCurrent = this.favLoth[i].end.getHours() * 60 + this.favLoth[i].end.getMinutes();
            let tempStartNext = this.favLoth[j].start.getHours() * 60 + this.favLoth[j].start.getMinutes();

            if ((tempStartNext - tempEndCurrent) < 45) {
              let hint = 'conflict found between ' + this.favLoth[i].name + ' and ' + this.favLoth[j].name +'!';
              this.report.push(hint);
            } else {
              let hint = 'no conflict between ' + this.favLoth[i].name + ' and ' + this.favLoth[j].name;
              this.report.push(hint);

            }

            
          } else {
              let hint = 'no conflict between ' + this.favLoth[i].name + ' and ' + this.favLoth[j].name;
              this.report.push(hint);
          }
        }
      }


    this.buttonClicked = true;
    console.log(this.favLoth)

    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");

    //console.log(this.favLoth);

    // ****************************************

    // ********* filtern der einzelnen locations (Lothstraße) *********
    // if (this.favLoth.length != 0) {
    //   for (let entry1 of this.favLoth) {

    //     let tempDate = this.parseDate(entry1.CourseStart);

    //     date_array_Loth.push(tempDate);

    //   }

    //   // sort Date array in descending order
    //   date_array_Loth.sort((a, b) => a - b);



    //   // check if Timeconflict
    //   for (var i = 0; i < date_array_Loth.length - 1; i++) {
    //     for (var j = 1; j < date_array_Loth.length; j++) {
    //       if (String(date_array_Loth[i].getDay()) === String(date_array_Loth[j].getDay())) {
    //         if (String(date_array_Loth[i].getHours()) === String(date_array_Loth[j].getHours())) {
    //           if (String(date_array_Loth[i].getMinutes()) === String(date_array_Loth[j].getMinutes())) {
    //             console.log("TIME CONFLICT IN COURSES LOTHSTRASSE!")
    //           }
    //         }
    //       }


    //       // with Date object, elements like Day, Hours and Minutes could be accessed with built-in get Function from Date
    //       console.log('Day: ' + String(date_array_Loth[i].getDay()) + '\n' +     // Days are numbered, e.g. 1(monday)...7(sunday)
    //         'Hour: ' + String(date_array_Loth[i].getHours()) + '\n' +
    //         'Minute: ' + String(date_array_Loth[i].getMinutes()))

    //     }

    //   }
    //   // ***********************************************************************
    // }

    // // ********* filtern der einzelnen locations (Karls)*********
    // if (this.favKarls.length != 0) {
    //   for (let entry1 of this.favKarls) {

    //     let tempDate = this.parseDate(entry1.CourseStart);

    //     date_array_Karls.push(tempDate);

    //   }

    //   // sort Date array in descending order
    //   date_array_Karls.sort((a, b) => a - b);

    //   // check if Timeconflict
    //   for (var i = 0; i < date_array_Karls.length - 1; i++) {

    //     for (var j = 1; j < date_array_Karls.length; j++) {

    //       if (String(date_array_Karls[i].getDay()) == String(date_array_Karls[j].getDay())) {
    //         if (date_array_Karls[i].getHours() == date_array_Karls[j].getHours()) {
    //           if (date_array_Karls[i].getMinutes() == date_array_Karls[j].getMinutes()) {
    //             console.log("TIME CONFLICT IN COURSES KARLSTRASSE!")
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // // ***********************************************************************


    // // *************** filtern der einzelnen locations (Pasing)***************
    // if (this.favPasing.length != 0) {
    //   for (let entry2 of this.favPasing) {

    //     let tempDate = this.parseDate(entry2.CourseStart);

    //     date_array_Pasing.push(tempDate);

    //   }

    //   // sort Date array in descending order
    //   date_array_Pasing.sort((a, b) => a - b);

    //   // check if Timeconflict
    //   for (var i = 0; i < date_array_Pasing.length - 1; i++) {

    //     for (var j = 1; j < date_array_Pasing.length; j++) {

    //       if (date_array_Pasing[i].getDay() == date_array_Pasing[j].getDay()) {
    //         if (date_array_Pasing[i].getHours() == date_array_Pasing[j].getHours()) {
    //           if (date_array_Pasing[i].getMinutes() == date_array_Pasing[j].getMinutes()) {
    //             console.log("TIME CONFLICT IN COURSES PASING!")
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // // ***********************************************************************

    // // *************** filtern der Zeitkonflikte untereinander ***************
    // if (this.favLoth.length != 0 && this.favKarls.length != 0) {
    //   for (var i = 0; i < date_array_Loth.length; i++) {
    //     for (var j = 0; i < date_array_Karls.length; j++) {

    //       if (date_array_Loth[i].getDay() == date_array_Karls[j].getDay()) {
    //         if (date_array_Loth[i].getHours() == date_array_Karls[j].getHours()) {
    //           if (date_array_Loth[i].getMinutes() == date_array_Karls[j].getMinutes()) {
    //             console.log("TIME CONFLICT IN COURSES!")
    //           }
    //         }
    //       }
    //     }
    //   }
    // }

    // if (this.favLoth.length != 0 && this.favPasing.length != 0) {
    //   for (var i = 0; i < date_array_Loth.length; i++) {
    //     for (var j = 0; i < date_array_Pasing.length; j++) {
    //       if (date_array_Loth[i].getDay() == date_array_Pasing[j].getDay()) {
    //         if (date_array_Loth[i].getHours() == date_array_Pasing[j].getHours()) {
    //           if (date_array_Loth[i].getMinutes() == date_array_Pasing[j].getMinutes()) {
    //             console.log("TIME CONFLICT IN COURSES!")
    //           }
    //         }
    //       }
    //     }
    //   }
    // }

    // if (this.favKarls.length != 0 && this.favPasing.length != 0) {
    //   for (var i = 0; i < date_array_Karls.length; i++) {
    //     for (var j = 0; i < date_array_Pasing.length; j++) {
    //       if (date_array_Karls[i].getDay() == date_array_Pasing[j].getDay()) {
    //         if (date_array_Karls[i].getHours() == date_array_Pasing[j].getHours()) {
    //           if (date_array_Karls[i].getMinutes() == date_array_Pasing[j].getMinutes()) {
    //             console.log("TIME CONFLICT IN COURSES!")
    //           }
    //         }
    //       }
    //     }
    //   }
    // }

    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");

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

