import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif';
import { Sticker } from '../sticker';
import { StickersService } from '../sticker-service/stickers.service';
import { GifsService } from '../gif-service/gifs.service';
import { Modal } from 'bootstrap'
import { Title } from '@angular/platform-browser';

declare function hideStickers(): any;
declare function hideGifs():any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  stickers:Sticker[] = []
  gifs:Gif[] = []
  num:number = 50;
  searchTerm!:string;
  title = 'Gif Palace - Search'

  // Modal
  gifModal!:Modal;
  stickerModal!:Modal;

  constructor(private stickerService:StickersService, private gifService:GifsService, private titleService:Title) { }

  showGifs() {
    hideStickers();
  }
  showStickers() {
    hideGifs();
  }

  search(search_term:any) {
    this.stickers = [];
    this.gifs = [];
    this.searchTerm = search_term;
    // for searched gifs
    this.gifService.getGifs(search_term,this.num).subscribe(res=>{
      console.log(res)
      for(let i = 0; i <= res.data.length; i++) {
        this.gifs.push(new Gif(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })
    
    // for searched stickers
    this.stickerService.getStickers(search_term,this.num).subscribe(res=>{
      console.log(res)
      for(let i = 0; i <= res.data.length; i++) {
        this.stickers.push(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })
  }


  ngOnInit(): void {
    // Title
    this.titleService.setTitle(this.title)
   
  }
  
  // Modal
  openGifModal(index:any) {
    let test = document.getElementById('gifModal'+index)
    if(test) {
      this.gifModal = new Modal(test, {
        keyboard:false
      })
    }
    this.gifModal.show()
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

}
