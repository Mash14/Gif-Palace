import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm!:string;
  @Output() startSearch = new EventEmitter<any>();

  search() {
    this.startSearch.emit(this.searchTerm);
    this.searchTerm = ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
