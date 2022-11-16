import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif';
import { GifsService } from '../gif-service/gifs.service';
import { Modal } from 'bootstrap';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-trending-gifs',
  templateUrl: './trending-gifs.component.html',
  styleUrls: ['./trending-gifs.component.css']
})
export class TrendingGifsComponent implements OnInit {

  trending_gifs:Gif[] = [];
  num:number = 50;
  title = 'Gif Palace - Trending Gifs'

  trendingModal!:Modal;
  constructor(private gifService:GifsService, private titleService:Title) { }

  ngOnInit(): void {
    // Title
    this.titleService.setTitle(this.title)
    
    this.gifService.getTrendingGifs(this.num).subscribe(res => {
      console.log(res);
      for(let i = 0; i <= res.data.length; i++) {
        this.trending_gifs.push(new Gif(res.data[i].id, res.data[i].images.downsized.url, res.data[i].title, new Date(res.data[i].import_datetime), new Date(res.data[i].trending_datetime),res.data[i].rating));
      }
    })
  }

  openTrending(index:any) {
    let test = document.getElementById('gifModal'+index)
    if(test) {
      this.trendingModal = new Modal(test, {
        keyboard:false
      })
    }
    this.trendingModal.show()
  }
}
