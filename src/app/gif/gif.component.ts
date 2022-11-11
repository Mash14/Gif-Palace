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
  unsearched_gifs:Gif[] = [];
  search_term:any = 'funny soft why scary player';
  num:number = 5;

  constructor(private gifsService:GifsService) { }

  searchGifs(search_term:any) {
    this.num = 50
    this.searched_gifs = []
    this.search_term = search_term
    this.gifsService.getGifs(search_term,this.num).subscribe(res => {
      console.log(res);
      for(let i = 0; i <= res.data.length; i++) {
        this.searched_gifs.push(new Gif(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      };
    });
  }

  // getRandomGif() {
  //   this.gifsService.getRandomGifs(this.search_term).subscribe(res => {
  //     console.log(res);
  //     for(let i = 0; i <= res.data.length; i++) {
  //       this.searched_gifs.push(new Gif(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
  //     };
  //   })
  // }

  getTrendingGifs() {
   
  }

  ngOnInit(): void {
    // Trending Gifs
    this.gifsService.getTrendingGifs(this.num).subscribe(res => {
      console.log(res);
      for(let i = 0; i <= res.data.length; i++) {
        this.trending_gifs.unshift(new Gif(res.data[i].id, res.data[i].images.downsized.url, res.data[i].title, new Date(res.data[i].import_datetime), new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })

    // Gifs
    this.gifsService.getGifs(this.search_term,this.num).subscribe(res => {
      console.log(res);
      for(let i = 0; i <= res.data.length; i++) {
        this.unsearched_gifs.push(new Gif(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      };
    });
  }

}
