import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-modal',
  templateUrl: 'modal.component.html'
})

export class ModalComponent {
  displayModal = true;
  modalSrc: any;
  modalImages: any;
  modalText: any;
  constructor(private sanitizer: DomSanitizer) {}
  public showModal (technics: any) {
    this.displayModal = true;
    this.modalSrc = `img/bean/${technics.img}_1.jpg`;
    this.modalImages = ''
/*
    if (technics.imgNum > 1) {
      for (let i = 1; i <= technics.imgNum; i++) {
        this.modalImages += `<img src="img/bean/${technics.img}_${i}.jpg" class="w3-third" (click)="alert(${i})">`;
      }
    }*/
    this.modalText = this.sanitizer.bypassSecurityTrustHtml(technics.text);
  }
}
