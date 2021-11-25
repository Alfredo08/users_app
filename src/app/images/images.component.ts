import { Component, OnInit } from '@angular/core';
import { DogimagesService } from './dogimages.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  dogImages: any[] = [];
  constructor( private _dogImagesService: DogimagesService ) { }

  ngOnInit(): void {
    let observable = this._dogImagesService.getDogImages();

    observable
    .subscribe( (data:any) => {
      console.log("Images component!:", data.message );
      
      let images: any[] = data.message;
      this.dogImages = data.message;
      console.log( this.dogImages );
    });
  }

}
