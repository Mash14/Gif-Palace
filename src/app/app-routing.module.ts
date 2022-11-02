import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from './gif/gif.component';
import { HomeComponent } from './home/home.component';
import { StickerComponent } from './sticker/sticker.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path : 'stickers', component : StickerComponent },
  { path: 'gifs', component: GifComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
