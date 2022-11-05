import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickersService } from './sticker-service/stickers.service'; 
import { GifsService } from './gif-service/gifs.service';
import { StickerComponent } from './sticker/sticker.component';
import { GifComponent } from './gif/gif.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { TrendingStickersComponent } from './trending-stickers/trending-stickers.component';
import { TrendingGifsComponent } from './trending-gifs/trending-gifs.component';

@NgModule({
  declarations: [
    AppComponent,
    StickerComponent,
    GifComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    TrendingStickersComponent,
    TrendingGifsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StickersService,GifsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
