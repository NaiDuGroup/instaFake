import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'listing-dialog',
  template: `
      <style>
        @charset "UTF-8";
        h6 {
          color: black;
        }
        .first-column {
          width: 40%;
          float: left;
        }
        .second-column {
          width: 40%;
          float: right;
        }

        .fixed-size {
          max-width:200px;
          max-height:350px;
        }

        .rounded-circle {
          width: 50px;
          height: 50px;
        }
      </style>
      <div id="backdrop" class="modal-backdrop fade" [ngClass]="{ show: showModal }"></div>
      <div class="modal d-block fade" 
          [ngClass]="{ show: showModal }"
          (click)="onClose()"
          id="listing-dialog" 
          tabindex="-1" 
          role="dialog" 
          aria-labelledby="modalIdLabel">
        <div class="modal-dialog" role="document" (click)="onDialogClick($event)">
          <div class="modal-content">
              <div class="modal-header">
                <button type="button"
                        class="close"
                        (click)="onClose()"
                        aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
              </div>
                <div class="modal-body">
                  <div class="first-column">
                    <img class="fixed-size" src= {{photoObj.urls.small}}>
                  </div>
                  <div class="second-column">
                    <h5> ebsintegrator </h5>
                    <hr>
                    <h6> {{photoObj.description}} </h6>
                  </div>
                </div>
            </div>
        </div>
    </div>
    `
})
export class ListingDialogComponent implements OnInit {



  showModal = false;
  photoId = '';
  photoObj;

  private routeSub: Subscription;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService) {}

  ngOnInit() {
    this.showModal = true;
    this.routeSub = this.route.params.subscribe(params => {
      this.photoId = params['id'] //log the value of id
    });
    this.apiService.getImageById(this.photoId).subscribe((resp: any) => {
      this.photoObj = resp;
    })
  }

  onClose() {
    this.showModal = false;
    this.router.navigate(['..']);
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
