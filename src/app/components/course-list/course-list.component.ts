import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faculty, Course } from './faculty';
import {Favorites} from "../favorites-list/favorites";

//import 'rxjs/add/operator/map';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})


export class CourseListComponent implements OnInit {

  // URLs for API Request
  readonly NINE_URL = 'https://nine.wi.hm.edu';
  readonly SERVER_URL ='http://10.179.5.242:3000';

  // Variables
  faculties: Observable<Faculty[]>
  facList: Faculty[] = [];

  favorites: Observable<Favorites[]>
  favList: Favorites[] = [];



  constructor(private http: HttpClient) {}

  getCourses() {
    this.http.get(this.NINE_URL + '/api2/Faculty/Get').subscribe(data => {

      for (let key in data) {
        if(data.hasOwnProperty(key)) {
          this.favList.forEach( (event) => {
              if (data[key].id == event.CourseId) {
                data[key].fav=true;
              }
            });
          this.facList.push(data[key]);
        }
      };
    });
  }


  getFavorites() {
    this.favList = [];

    this.http.get(this.SERVER_URL + '/Course').subscribe(data => {
      for (let key in data) {
        if(data.hasOwnProperty(key)) {
          this.favList.push(data[key]);
        }
      }
    });
  }

  addToFav(param: Faculty){
    
    this.http.post(this.SERVER_URL + '/Course', {

      CourseId: param.id,
      CourseName: param.name,
      CourseFaculty: param.shortname


    })
    .subscribe(res => {
      param.fav = true;
      console.log(res);
    },
    err => {console.log("Error occured!");
  });


  }

  ngOnInit() {
    this.getFavorites();
    this.getCourses()
  }
}
