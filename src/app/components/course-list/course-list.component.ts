import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Favorites} from '../favorites-list/favorites';

import {NINE_URL, SERVER_URL} from '../../app.constants';
import {CourseObject} from './courses';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})


export class CourseListComponent implements OnInit {

  courseList: CourseObject[] = [];

  favorites: Observable<Favorites[]>;
  favList: Favorites[] = [];

  loading = true;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getFavorites();
    this.getCourses();
  }


  getCourses() {
    this.http.get(NINE_URL + '/api/v2/courses/FK%2013/CIE/SoSe%2018').subscribe(data => {

      for (const key in data) {
        if (data.hasOwnProperty(key)) {

          this.favList.forEach((event) => {
            if (data[key].id === event.CourseId) {
              data[key].fav = true;
            }
          });
          // just take all courses with curricula
          // if(data[key].curricula.length > 0) {
          this.courseList.push(data[key]);
          // }

        }
      }

      this.courseList.sort((a, b) => {
        const x = a.name;
        const y = b.name;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });

      // console.log(this.courseList)
      this.loading = false;
    });
  }


  getFavorites() {
    this.favList = [];

    this.http.get(SERVER_URL + '/courses').subscribe(data => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.favList.push(data[key]);
        }
      }
    });
  }

  addToFav(param: CourseObject) {

    this.http.post(SERVER_URL + '/courses', {

      CourseId: param.id,
      CourseName: param.name,
      CourseFaculty: param.shortName,
      CourseLocation: param.dates[0].rooms[0].campus,
      CourseStart: param.dates[0].begin,
      CourseEnd: param.dates[0].end

    })
      .subscribe(() => {
          param.fav = true;
        },
        () => {
          console.log('Error occured!');
        });
  }
}
