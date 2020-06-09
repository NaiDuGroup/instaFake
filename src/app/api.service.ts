import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient ) { }

  Key = 'UBzFkf1ihtrG2ULugkCo5DII4e7ZlaD6hSJVjz2aUkM';
  page = 10;
  per_page = 21;
  getImages() {
    return this.httpClient.get(
      `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}`
    );
  }

  getImageById(photoId) {
    return this.httpClient.get(
      `https://api.unsplash.com/photos/`+photoId+`?client_id=${this.Key}`
    );
  }
}
