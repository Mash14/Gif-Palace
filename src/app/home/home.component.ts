import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif';
import { Sticker } from '../sticker';
import { StickersService } from '../sticker-service/stickers.service';
import { GifsService } from '../gif-service/gifs.service';
import { Modal } from 'bootstrap';
import { Title } from '@angular/platform-browser';

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
  searched_gifs:Gif[]=[];
  searched_stickers:Sticker[]=[];
  num:number = 8;
  search_term:any = 'fly high'
  title = 'Gif Palace - Home';
  
  // Modal
  trendingStickerModal!:Modal;
  trendingGifModal!:Modal;
  gifModal!:Modal;
  stickerModal!:Modal;

  constructor(private stickerService:StickersService,private gifsService:GifsService, private titleService:Title) { }

  search(search_term:any) {
    this.num = 2
    this.searched_gifs = []
    this.searched_stickers = []
    // searched gifs
    this.gifsService.getGifs(search_term,this.num).subscribe(res => {
      console.log(res);
      for(let i = 0; i <= res.data.length; i++) {
        this.searched_gifs.push(new Gif(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      };
    });

    // searched stickers
    this.stickerService.getStickers(search_term,this.num).subscribe(res => {
      console.log(res)
      for(let i = 0; i <= res.data.length; i++) {
        this.searched_stickers.push(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })
  }

  ngOnInit(): void {
    //Title
    this.titleService.setTitle(this.title)
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
    let test = document.getElementById('stickerModal'+index)
    if(test) {
      this.stickerModal = new Modal(test, {
        keyboard:false
      })
    }
    this.stickerModal.show()
  }

  openGifModal(index:any) {
    let test = document.getElementById('gifModal'+index)
    if(test) {
      this.gifModal = new Modal(test, {
        keyboard:false
      })
    }
    this.gifModal.show()
  }

  openSearchedStickerModal(index:any) {
    let test = document.getElementById('stickerModals'+index)
    if(test) {
      this.stickerModal = new Modal(test, {
        keyboard:false
      })
    }
    this.stickerModal.show()
  }

  openSearchedGifModal(index:any) {
    let test = document.getElementById('gifModals'+index)
    if(test) {
      this.gifModal = new Modal(test, {
        keyboard:false
      })
    }
    this.gifModal.show()
  }

}
