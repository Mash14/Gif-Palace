import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif';
import { Sticker } from '../sticker';
import { StickersService } from '../sticker-service/stickers.service';
import { GifsService } from '../gif-service/gifs.service';
import { Modal } from 'bootstrap';

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
  
  // Modal
  trendingStickerModal!:Modal;
  trendingGifModal!:Modal;
  gifModal!:Modal;
  stickerModal!:Modal;

  constructor(private stickerService:StickersService,private gifsService:GifsService) { }

  search(search_term:any) {
    // searched gifs
    this.gifsService.getGifs(search_term,this.num).subscribe(res => {
      console.log(res);
      for(let i = 0; i <= res.data.length; i++) {
        this.gifs.push(new Gif(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      };
    });

    // searched stickers
    this.stickerService.getStickers(search_term,this.num).subscribe(res => {
      console.log(res)
      for(let i = 0; i <= res.data.length; i++) {
        this.stickers.push(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })
  }

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
  }

  // Modal
  openTrendingStickersModal(index:any) {
    let test = document.getElementById('stickersModal'+index)
    if(test) {
      this.trendingStickerModal = new Modal(test, {
        keyboard:false
      })
    }
    this.trendingStickerModal.show()
  }
  openTrendingGifModal(index:any) {
    let test = document.getElementById('gifsModal'+index)
    if(test) {
      this.trendingGifModal = new Modal(test, {
        keyboard:false
      })
    }
    this.trendingGifModal.show()
  }
  openStickerModal(index:any) {
    let test = document.getElementById('stickersModal'+index)
    if(test) {
      this.stickerModal = new Modal(test, {
        keyboard:false
      })
    }
    this.stickerModal.show()
  }
  openGifModal(index:any) {
    let test = document.getElementById('gifsModal'+index)
    if(test) {
      this.gifModal = new Modal(test, {
        keyboard:false
      })
    }
    this.gifModal.show()
  }

}
