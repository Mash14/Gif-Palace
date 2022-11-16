import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  title = 'Gif Palace - 404'

  constructor(private titleService:Title) { }

  ngOnInit(): void {
    // Title
    this.titleService.setTitle(this.title)
  }

}
