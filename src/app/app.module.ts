import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
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
// for share buttons 
import { ShareButtonsPopupModule } from 'ngx-sharebuttons/popup';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    StickerComponent,
    GifComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    TrendingStickersComponent,
    TrendingGifsComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ShareButtonsPopupModule,
    ShareIconsModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
  ],
  providers: [StickersService,GifsService,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
