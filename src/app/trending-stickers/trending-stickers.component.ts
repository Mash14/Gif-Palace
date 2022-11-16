import { Component, OnInit } from '@angular/core';
import { Sticker } from '../sticker';
import { StickersService } from '../sticker-service/stickers.service';
import { Modal } from 'bootstrap';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-trending-stickers',
  templateUrl: './trending-stickers.component.html',
  styleUrls: ['./trending-stickers.component.css']
})
export class TrendingStickersComponent implements OnInit {

  trending_stickers:Sticker[] = []
  num:number = 50;
  title = 'Gif Palace - Trending Stickers'

  // Modal
  trendingModal!:Modal;
  constructor(private stickerService:StickersService, private titleService:Title) { }

  ngOnInit(): void {
    // Title
    this.titleService.setTitle(this.title)
    
    this.stickerService.getTrendingStickers(this.num).subscribe((res:any) => {

      for(let i=0; i<=res.data.length; i++) {
        this.trending_stickers.push(new Sticker(res.data[i].id,res.data[i].images.downsized.url,res.data[i].title,new Date(res.data[i].import_datetime),new Date(res.data[i].trending_datetime),res.data[i].rating));
      };
    
    });
  }

  openModal(index:any) {
    let test = document.getElementById('stickersModal'+index)
    if(test) {
      this.trendingModal = new Modal(test, {
        keyboard:false
      })
    }
    this.trendingModal.show()
  }

}
