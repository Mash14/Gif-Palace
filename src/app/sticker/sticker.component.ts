import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Sticker } from '../sticker';
import { StickersService } from '../sticker-service/stickers.service';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit { 

  random_sticker!:Sticker;
  trending_stickers:Sticker[] = [];
  search_stickers:Sticker[] = [];
  stickers:Sticker[] = [];

  search_term:any = 'funny tripping';
  num:number = 8
  
  stickerModal!:Modal;
  // searched:Sticker[] = this.search_stickers.slice(0,10)
  // showMore() {
  //   let newLength = this.searched.length + 10;
  //   if (newLength > this.search_stickers.length) {
  //     newLength = this.search_stickers.length
  //   }; 
  //   this.searched = this.search_stickers.slice(0, newLength)
  // }
  constructor(private stickerService:StickersService) { }

  searchStickers(search_term:any) {
    this.search_stickers = []
    this.num = 20
    this.stickerService.getStickers(search_term,this.num).subscribe(res => {
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


  ngOnInit(): void {
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

}
