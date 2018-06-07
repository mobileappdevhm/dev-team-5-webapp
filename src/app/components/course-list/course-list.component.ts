import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faculty, Course } from './faculty';
import { Favorites } from "../favorites-list/favorites";
import { Description } from "../description/description"

import { NINE_URL, SERVER_URL } from "../../app.constants";
import { CourseObject } from './courses';

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
  courseList: CourseObject[] = [];

  favorites: Observable<Favorites[]>;
  favList: Favorites[] = [];
  Description: Description;


  constructor(private http: HttpClient) {}

  getCourses() {
    this.http.get(NINE_URL + '/api/v2/courses/FK%2013/CIE/SoSe%2018').subscribe(data => {

      for (let key in data) {
        if(data.hasOwnProperty(key)) {

          this.favList.forEach( (event) => {
            if (data[key].id == event.CourseId) {
              data[key].fav=true;
            }
          });
          // just take all courses with curricula
          // if(data[key].curricula.length > 0) {
            this.courseList.push(data[key]);
          // }

        }
      }

      this.courseList.sort((a, b) => {
        var x = a.name; var y = b.name;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });

      // console.log(this.courseList)
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

  addToFav(param: CourseObject){

    this.http.post(SERVER_URL + '/Course', {

      CourseId: param.id,
      CourseName: param.name,
      CourseFaculty: param.shortName


    })
      .subscribe(res => {
          param.fav = true;
        },
        err => {console.log("Error occured!");
        });


  }

  ngOnInit() {
    this.getFavorites();
    this.getCourses();
    // this._sharedService.setauthorData(this.)
  }

  goToCourses() {
    console.log(this.courseList);
  }

  // showDescription(param: CourseObject){
  // this.Description.name = param.name;
  // }
  

}
