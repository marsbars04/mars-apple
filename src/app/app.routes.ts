import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { IpadComponent } from 'src/pages/ipad/ipad.component';
import { MacComponent } from 'src/pages/mac/mac.component';
import { IphoneComponent } from 'src/pages/iphone/iphone.component';
import { MusicComponent } from 'src/pages/music/music.component';
import { SupportComponent } from 'src/pages/support/support.component';
import { TvComponent } from 'src/pages/tv/tv.component';
import { WatchComponent } from 'src/pages/watch/watch.component';
import { SearchComponent } from 'src/pages/search/search.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ipad',
    component: IpadComponent
  },
  {
    path: 'mac',
    component: MacComponent
  },
  {
    path: 'iphone',
    component: IphoneComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'tv',
    component: TvComponent
  },
  {
    path: 'watch',
    component: WatchComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
];
