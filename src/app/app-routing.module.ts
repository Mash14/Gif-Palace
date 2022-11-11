import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from './gif/gif.component';
import { HomeComponent } from './home/home.component';
import { StickerComponent } from './sticker/sticker.component';
import { SearchComponent } from './search/search.component';
import { TrendingGifsComponent } from './trending-gifs/trending-gifs.component';
import { TrendingStickersComponent } from './trending-stickers/trending-stickers.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path : 'stickers', component : StickerComponent },
  { path: 'gifs', component: GifComponent },
  { path: 'search', component: SearchComponent},
  { path: 'trending/gifs', component: TrendingGifsComponent},
  { path: 'trending/stickers', component: TrendingStickersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
