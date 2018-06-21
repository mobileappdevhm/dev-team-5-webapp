import { Component, OnInit, Input, OnDestroy, Injectable } from '@angular/core';
import { CourseObject } from '../course-list/courses';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NINE_URL, SERVER_URL } from "../../app.constants";
import { Course } from '../course-list/faculty';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',

    
  styleUrls: ['./description.component.css']
})


export class DescriptionComponent implements OnInit {

  id: string;
  private sub: any;
  courseList: CourseObject[] = [];
  selectedCourse: CourseObject;
  isDataAvailable: boolean = false;
  checkedRoute: boolean = false;


  constructor(private route: ActivatedRoute, private http: HttpClient, private chkRoute: Router) { }
  
  // @Input() myCourse: CourseObject

  getDetails() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

    });

    this.http.get(NINE_URL + '/api/v2/courses/FK%2013/CIE/SoSe%2018').subscribe(data => {

      for (let key in data) {
        if(data.hasOwnProperty(key)) {

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

      console.log(this.courseList)
     

      if(this.chkRoute.url === '/courses/descriptions/'+this.id) {
        this.checkedRoute = true;
      } else {
        this.checkedRoute = false;
      }
      
      //return this.selectedCourse = this.courseList.filter(x => x.id == this.id);
      this.isDataAvailable = true;
      return this.selectedCourse = this.courseList.find(x => x.id === this.id)
      //console.log(this.selectedCourse);
    });

    

    
  }

  getLectureName(): string {
    return this.selectedCourse.name;
  }

  getName(): string {
      return this.selectedCourse.dates[0].lecturer[0].lastName;
  }

  getRoom(): string {
    return this.selectedCourse.dates[0].rooms[0].number;
  }

  getCampus(): string {
    return this.selectedCourse.dates[0].rooms[0].campus;
  }

  
  getDates(): Date {
    // example for param: "20180321T164500Z";
    let year = this.selectedCourse.dates[0].begin.substring(0, 4);
    let month =this.selectedCourse.dates[0].begin.substring(4, 6);
    let day = this.selectedCourse.dates[0].begin.substring(6, 8);
    let hour = this.selectedCourse.dates[0].begin.substring(9, 11);
    let minute = this.selectedCourse.dates[0].begin.substring(11, 13);
    let seconds = this.selectedCourse.dates[0].begin.substring(13, 15);

    // concatenate substrings above to a date string with format 'yyyy-mm-ddTHH:mm:ss'
    let res = year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + seconds;

    // create a Date object from 'res' string
    let date = new Date(res);

    return date;
  }

  getDescriptions(): any {
    return this.selectedCourse.description;
  }


  ngOnInit() {

    this.getDetails();

  }


}
