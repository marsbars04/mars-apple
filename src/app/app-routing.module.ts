import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { HomeComponent } from 'src/pages/home/home.component';
import { IpadComponent } from 'src/pages/ipad/ipad.component';
import { IphoneComponent } from 'src/pages/iphone/iphone.component';
import { MacComponent } from 'src/pages/mac/mac.component';
import { MusicComponent } from 'src/pages/music/music.component';
import { SupportComponent } from 'src/pages/support/support.component';
import { TvComponent } from 'src/pages/tv/tv.component';
import { WatchComponent } from 'src/pages/watch/watch.component';
import { SearchComponent } from 'src/pages/search/search.component';
import { ShoppingComponent } from 'src/pages/shopping/shopping.component';



@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  declarations: [HomeComponent, IpadComponent, IphoneComponent, MacComponent,
     MusicComponent, SupportComponent, TvComponent, WatchComponent, SearchComponent, ShoppingComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
