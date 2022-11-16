import { Component, OnInit } from '@angular/core';
import { Sticker } from '../sticker';
import { StickersService } from '../sticker-service/stickers.service';
import { Modal } from 'bootstrap';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit { 

  trending_stickers:Sticker[] = [];
  search_stickers:Sticker[] = [];
  stickers:Sticker[] = [];

  search_term:any = 'king majesty';
  num:number = 8
  title = 'Gif Palace - Stickers'
  
  // Modal 
  stickerModal!:Modal;
  trendingModal!:Modal;
  stickersModal!:Modal;
 
  constructor(private stickerService:StickersService, private titleService:Title) { }

  searchStickers(search_term:any) {
    this.search_stickers = []
    this.num = 50
    this.stickerService.getStickers(search_term,this.num).subscribe(res => {
      console.log(res)
      for(let i = 0; i <= res.data.length; i++) {
        this.search_stickers.push(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })
  }

  ngOnInit(): void {
    //Title
    this.titleService.setTitle(this.title)
    
    // Stickers
    this.stickerService.getStickers(this.search_term,this.num).subscribe(res => {
      console.log(res)
      for(let i = 0; i <= res.data.length; i++) {
        this.stickers.push(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })

    // Trending Stickers
    this.stickerService.getTrendingStickers(this.num).subscribe((res:any) => {
      console.log(res)
      for(let i=0; i<=res.data.length; i++) {
        this.trending_stickers.unshift(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      };
    });

    // Modal
   
  }

  open(index:any) {
    // this.search_stickers[index].id  = id 
    let test = document.getElementById('stickerModal' + index);
    if(test ) {
       
      this.stickerModal = new Modal(test,{
        keyboard:false
      })
    }
    this.stickerModal.show();
  }
  openTrending(index:any) {
    // this.search_stickers[index].id  = id 
    let test = document.getElementById('stickerTrendingModal' + index);
    if(test ) {
       
      this.trendingModal = new Modal(test,{
        keyboard:false
      })
    }
    this.trendingModal.show();
  }
  openStickers(index:any) {
    // this.search_stickers[index].id  = id 
    let test = document.getElementById('stickersModal' + index);
    if(test ) {
       
      this.stickersModal = new Modal(test,{
        keyboard:false
      })
    }
    this.stickersModal.show();
  }

}
