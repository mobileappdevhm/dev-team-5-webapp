import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faculty, Course } from './faculty';
import { Favorites } from "../favorites-list/favorites";

import { NINE_URL, SERVER_URL } from "../../app.constants";

//import 'rxjs/add/operator/map';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})


export class CourseListComponent implements OnInit {

  // Variables
  faculties: Observable<Faculty[]>;
  facList: Faculty[] = [];

  favorites: Observable<Favorites[]>;
  favList: Favorites[] = [];



  constructor(private http: HttpClient) {}

  getCourses() {
    this.http.get(NINE_URL + '/api2/Faculty/Get').subscribe(data => {

      for (let key in data) {
        if(data.hasOwnProperty(key)) {

          this.favList.forEach( (event) => {
            if (data[key].id == event.CourseId) {
              data[key].fav=true;
            }
          });
          // just take all courses with curricula
          // if(data[key].curricula.length > 0) {
            this.facList.push(data[key]);
          // }

        }
      }

      this.facList.sort((a, b) => {
        var x = a.name; var y = b.name;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    });
  }


  getFavorites() {
    this.favList = [];

    this.http.get(SERVER_URL + '/Course').subscribe(data => {
      for (let key in data) {
        if(data.hasOwnProperty(key)) {
          this.favList.push(data[key]);
        }
      }
    });
  }

  addToFav(param: Faculty){

    this.http.post(SERVER_URL + '/Course', {

      CourseId: param.id,
      CourseName: param.name,
      CourseFaculty: param.shortname


    })
      .subscribe(res => {
          param.fav = true;
        },
        err => {console.log("Error occured!");
        });


  }

  ngOnInit() {
    this.getFavorites();
    this.getCourses()
  }

  goToCourses() {
    console.log(this.facList);
  }
}
