import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif';
import { Sticker } from '../sticker';
import { StickersService } from '../sticker-service/stickers.service';
import { GifsService } from '../gif-service/gifs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trending_gifs:Gif[] = []
  trending_stickers:Gif[] = []
  gifs:Gif[] = [];
  stickers:Sticker[] = [];
  num:number = 2;
  search_term = 'happy';

  constructor(private stickerService:StickersService,private gifsService:GifsService) { }

  ngOnInit(): void {
    // trending gif
    this.gifsService.getTrendingGifs(this.num).subscribe(res=> {
      console.log(res)
      for(let i = 0; i <= res.data.length; i++) {
        this.trending_gifs.push(new Gif(res.data[i].id, res.data[i].images.downsized.url, res.data[i].title, new Date(res.data[i].import_datetime), new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    });

    // trending stickers
    this.stickerService.getTrendingStickers(this.num).subscribe((res:any) => {
      console.log(res)
      for(let i=0; i<=res.data.length; i++) {
        this.trending_stickers.push(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
        
      };
    });

    // searched gifs
    this.gifsService.getGifs(this.search_term,this.num).subscribe(res => {
      console.log(res);
      for(let i = 0; i <= res.data.length; i++) {
        this.gifs.push(new Gif(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      };
    });

    // searched stickers
    this.stickerService.getStickers(this.search_term,this.num).subscribe(res => {
      console.log(res)
      for(let i = 0; i <= res.data.length; i++) {
        this.stickers.push(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })
  }

}
