import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StickersService {

  constructor(private http:HttpClient) { }


  getStickers(search_term:string,num:number):Observable<any> {
    return this.http.get<any>(environment.api_url + 'stickers/search?api_key=' + environment.api_key + '&q=' + search_term + '&limit=' + num)   
  }

  getRandomSticker(search_tag:string):Observable<any> {
    return this.http.get<any>(environment.api_url + 'stickers/random?api_key=' + environment.api_key + '&tag=' + search_tag);
  }

  getTrendingStickers(num:number):Observable<any> {
    return this.http.get<any>(environment.api_url + 'stickers/trending?api_key=' + environment.api_key + '&limit=' + num);
  };

}
