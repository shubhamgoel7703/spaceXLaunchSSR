// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
// import {RouterModule} from '@angular/router';

// import {AppComponent} from './app.component';
// import {HomeComponent} from './home/home.component';
// import {TransferHttpCacheModule} from '@nguniversal/common';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//   ],
//   imports: [
//     BrowserModule.withServerTransition({appId: 'my-app'}),
//     RouterModule.forRoot([
//       { path: '', component: HomeComponent, pathMatch: 'full'},
//       { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
//       { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
//     ]),
//     TransferHttpCacheModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainPageItemComponent } from './components/main-page-item/main-page-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainPageItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpClientModule,
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
