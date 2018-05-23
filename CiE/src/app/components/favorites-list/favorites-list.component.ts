import { Component, OnInit } from '@angular/core';
import { Favorites } from './favorites';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})


export class FavoritesListComponent implements OnInit {

  // URLs for API Request
  readonly SERVER_URL ='http://10.179.62.220:3000';

  // Variables
  favorites: Observable<Favorites[]>
  favList: Favorites[] = [];



  constructor(private http: HttpClient) {}

  getFavorites() {

    this.http.get(this.SERVER_URL + '/Course').subscribe(data => { 
      
      for (let key in data) {
        if(data.hasOwnProperty(key)) {
          this.favList.push(data[key]);
        }
      };
    });
  }
  
  rmFromFav(param: Favorites){

    this.http.delete(this.SERVER_URL + '/Course/' + param.id)

    .subscribe(res => {console.log(res);
    },
    err => {console.log("Error occured!");
  });

  
 
  }

  ngOnInit() {

    this.getFavorites()

  }
}
