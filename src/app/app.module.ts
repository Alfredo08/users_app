import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { UserService } from './user/user.service';
import { DogimagesService } from './images/dogimages.service';
import { ImagesComponent } from './images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, DogimagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
