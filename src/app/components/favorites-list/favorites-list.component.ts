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
  readonly SERVER_URL ='http://10.179.6.101:3000';
  //readonly SERVER_URL = 'https://my-json-server.typicode.com/ShaggyBlanco/fakejsondb/courses';

  // letiables
  favorites: Observable<Favorites[]>
  favList: Favorites[] = [];
  favLoth:  Favorites[] = [];
  favKarls:  Favorites[] = [];
  favPasing:  Favorites[] = [];

  username:any = '';


  constructor(private http: HttpClient, private loginService: LoginService) {
   
  }


  getFavorites() {
    this.favList = [];

    this.http.get(SERVER_URL + '/Course').subscribe(data => {
      //this.http.get(this.SERVER_URL).subscribe(data => {

      for (let key in data) {
        if(data.hasOwnProperty(key)) {
          this.favList.push(data[key]);
        }
      };
    });
  
  }

  rmFromFav(param: Favorites){

    this.http.delete(this.SERVER_URL + '/Course/' + param.id)
      .subscribe(res => {
          console.log(res);
          this.getFavorites();
        },
        err => {console.log("Error occured!");
        });



  }

  checkTimeConflict() {

    let date_array = [];

    for (let entry of this.favList) {
      
      let tempDate = this.parseDate(entry.CourseStart);

      date_array.push(tempDate);
    }

    // sort Date array in descending order
    date_array.sort((a,b) => a-b);

    // sort Date in ascending order
    //date_array.sort();

    // with Date object, elements like Day, Hours and Minutes could be accessed with built-in get Function from Date
    console.log('Day: ' + String(date_array[0].getDay()) + '\n' +     // Days are numbered, e.g. 1(monday)...7(sunday)
                'Hour: ' + String(date_array[0].getHours()) + '\n' +
                'Minute: ' + String(date_array[0].getMinutes()))

  }

  /*
    Function to parse date string fetched from json element. 
    Returns a formatted Date object that is readable for Typescript.
   */
  parseDate(param: String): Date {

    // example for param: "20180321T164500Z";
    let year = param.substring(0, 4);
    let month = param.substring(4, 6);
    let day = param.substring(6,8);
    let hour = param.substring(9,11);
    let minute = param.substring(11,13);
    let seconds = param.substring(13,15);

    // concatenate substrings above to a date string with format 'yyyy-mm-ddTHH:mm:ss'
    let res = year + '-' + month + '-' + day + 'T' + hour + ':'+ minute + ':'+ seconds;

    // create a Date object from 'res' string
    let date = new Date(res);

    return date;
  }

  

  ngOnInit() {
    this.getFavorites()

    
  }
}

