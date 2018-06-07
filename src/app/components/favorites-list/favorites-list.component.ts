import { Component, OnInit } from '@angular/core';
import { Favorites } from './favorites';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login/login.service';

import { SERVER_URL } from '../../app.constants';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})


export class FavoritesListComponent implements OnInit {

  // URLs for API Request
  readonly SERVER_URL ='http://10.179.5.242:3000';

  // Variables
  favorites: Observable<Favorites[]>
  favList: Favorites[] = [];

  username:any = '';


  constructor(private http: HttpClient, private loginService: LoginService) {
    this.username = this.loginService.user_firstname;
  }

  getFavorites() {
    this.favList = [];

    this.http.get(SERVER_URL + '/Course').subscribe(data => {

      for (let key in data) {
        if(data.hasOwnProperty(key)) {
          this.favList.push(data[key]);
        }
      };
    });
  }

  rmFromFav(param: Favorites){

    this.http.delete(SERVER_URL + '/Course/' + param.id)
      .subscribe(res => {
          console.log(res);
          this.getFavorites();
        },
        err => {console.log("Error occured!");
        });



  }

  ngOnInit() {
    this.getFavorites()
  }
}

