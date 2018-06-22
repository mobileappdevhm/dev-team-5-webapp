import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {NINE_URL} from '../../app.constants';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  private courseList = new Subject<any>();


  constructor( private http: HttpClient) { }


  addToCourseList(message: string) {
    this.courseList.next(message);
  }

  clearMessage() {
    this.courseList.next();
  }

  g(): Observable<any> {
    return this.courseList.asObservable();
  }


  getCourses() {
    this.http.get(NINE_URL + '/api/v2/courses/FK%2013/CIE/SoSe%2018').subscribe(data => {

      this.sendMessage(data);

    });
  }

}
