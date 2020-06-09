import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <style>
    @charset "UTF-8";
    .navbarpos {
      margin-left:300px;
    }
    </style>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <a class="navbar-brand navbarpos" href="#">INSTACLONE</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </nav>
  `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
