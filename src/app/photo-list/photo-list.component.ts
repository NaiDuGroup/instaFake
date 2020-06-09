import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-photo-list',
  template: `
  <style>
    @charset "UTF-8";

    .insta-grid {
      width: 293px;
      height: 293px;
      margin: 10px;
    }
  </style>
  <div class="container" *ngIf="photoList">
    <div class="row justify-content-md-center">
      <div class=".col-6" *ngFor="let photo of photoList">
        <a [routerLink]="['photo-list',photo.id]">
          <img class="insta-grid" src="{{photo.urls.small}}" />
        </a>
      </div>
    </div>
  </div>
  `
})
export class PhotoListComponent implements OnInit {

  photoList;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getImages().subscribe((resp: any) => {
      this.photoList = resp;
    });
  }

}
