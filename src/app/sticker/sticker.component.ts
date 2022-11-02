import { Component, OnInit } from '@angular/core';
import { Sticker } from '../sticker';
import { StickersService } from '../sticker-service/stickers.service';


@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {

  random_sticker!:Sticker;
  trending_stickers:Sticker[] = [];
  search_stickers:Sticker[] = [];

  search_term:any = 'random';
  num:number = 50

  addStickers() {
    return this.num + 10
  }
  

  constructor(private stickerService:StickersService) { }

  searchStickers() {
    
    this.stickerService.getStickers(this.search_term,this.num).subscribe(res => {
      console.log(res)
      for(let i = 0; i <= res.data.length; i++) {
        this.search_stickers.push(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })
  }

  // getRandomSticker() {
  //   this.stickerService.getRandomSticker(this.search_term).subscribe( res => {
  //     console.log(res)
      
  //     this.random_sticker = new Sticker(res.data.id,res.data.images.downsized.url,res.data.title,new Date(res.date.import_datetime),new Date(res.date.trending_datetime));
      
  //   });
  // };

  getTrendingStickers() {
    this.stickerService.getTrendingStickers(this.num).subscribe((res:any) => {
      console.log(res)
      for(let i=0; i<=res.data.length; i++) {
        this.trending_stickers.push(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
        
      };
      
    });
  };

  ngOnInit(): void {
    
  }

}
