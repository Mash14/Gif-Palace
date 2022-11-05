import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif';
import { GifsService } from '../gif-service/gifs.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  searched_gifs:Gif[] = [];
  trending_gifs:Gif[] = [];
  random_gif:Gif[] = [];
  search_term:any = 'trending';
  num:number = 5;

  search(search_ter:any) {
    this.search_term = search_ter;
  }

  constructor(private gifsService:GifsService) { }

  searchGifs() {
    this.gifsService.getGifs(this.search_term,this.num).subscribe(res => {
      console.log(res);
      for(let i = 0; i <= res.data.length; i++) {
        this.searched_gifs.push(new Gif(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      };
    });
  }

  getRandomGif() {
    this.gifsService.getRandomGifs(this.search_term).subscribe(res => {
      console.log(res);
      for(let i = 0; i <= res.data.length; i++) {
        this.searched_gifs.push(new Gif(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      };
    })
  }

  getTrendingGifs() {
    this.gifsService.getTrendingGifs(this.num).subscribe(res => {
      console.log(res);
      for(let i = 0; i <= res.data.length; i++) {
        this.trending_gifs.push(new Gif(res.data[i].id, res.data[i].images.downsized.url, res.data[i].title, new Date(res.data[i].import_datetime), new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })
  }

  ngOnInit(): void {
    
  }

}
