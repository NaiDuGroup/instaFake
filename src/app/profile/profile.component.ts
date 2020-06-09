import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  template: `
  <style>
  @charset "UTF-8";
  .pr-photo {
    height: 150px;
    width: 150px;
    margin-right: 200px;

  }
  </style>
  <div class="container" >
  <div class="row justify-content-md-center">
      <div class=".col-6">
    <img src= {{profilePhoto.urls.small}} class="rounded-circle pr-photo">
    </div>
    <div class=".col-3">
      <div class="row">
        <h2>ebsintegrator </h2> &nbsp;&nbsp;
        <button type="button" class="btn btn-primary">Follow</button>
      </div>
      <br>
      <div class="row">
          <strong>21</strong> <h6>posts</h6> &nbsp; &nbsp; <strong>451</strong> <h6>followers</h6> &nbsp; &nbsp; <strong>151</strong> <h6>following</h6>
      </div>
      <div class="row">
          <h6>Followed by </h6><strong> &nbsp;dunai, kiseleov_igor, anna_bulat</strong> <h6>&nbsp;+23 more</h6>
      </div>
    </div>
  </div>

</div>
  `
})
export class ProfileComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  profilePhoto;

  ngOnInit(): void {
    this.apiService.getImageById('4dlMnSkMXXc').subscribe((resp: any) => {
      this.profilePhoto = resp;
    })
  }

}
