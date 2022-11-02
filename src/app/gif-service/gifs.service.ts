import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http:HttpClient) { }

  getGifs(search_term:string,num:number):Observable<any> {
    return this.http.get<any>(environment.api_url + 'gifs/search?api_key=' + environment.api_key + '&q=' + search_term + '&limit=' +num);
  };

  getRandomGifs(search_tag:string):Observable<any> {
    return this.http.get<any>(environment.api_url + 'gifs/random?api_key=' + environment.api_key + '&tag=' + search_tag);
  };

  getTrendingGifs(num:number):Observable<any> {
    return this.http.get<any>(environment.api_url + 'gifs/trending?api_key=' + environment.api_key + '&limit=' + num);
  };

}
