import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  public movies:Array<any> = [];

  public getDiscoveredMovies(){
    return new Promise((resolve, reject) => {
      this.http.get(`https://${environment.api_name}/3/discover/movie?api_key=${environment.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    })
  }

  public searchMovies(searchText:string){
    return new Promise((resolve, reject)=>{
      this.http.get(`https://${environment.api_name}/3/search/movie?api_key=${environment.api_key}&language=en-US&query=${searchText}&page=1&include_adult=false`).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  public getMovieDetails(movieid:number){
    return new Promise((resolve, reject)=>{
      this.http.get(`https://${environment.api_name}/3/movie/${movieid}?api_key=${environment.api_key}&language=en-US`).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

}
