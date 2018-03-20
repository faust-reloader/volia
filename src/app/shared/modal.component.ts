import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-modal',
  templateUrl: 'modal.component.html'
})

export class ModalComponent {
  @Input() modalSrc;
  @Output() close = new EventEmitter();
  closeMe() { this.close.emit(); }

  modalImages;
  modalText;

  constructor(private sanitizer: DomSanitizer) {
  }

  showSrc(item) {
    this.modalSrc = `./assets/bean/${item.img}_1.jpg`;
    this.modalImages = '';
    /*
        if (technics.imgNum > 1) {
          for (let i = 1; i <= technics.imgNum; i++) {
            this.modalImages += `<img src="assets/bean/${technics.img}_${i}.jpg" class="w3-third" (click)="alert(${i})">`;
          }
        }
    */
    this.modalText = this.sanitizer.bypassSecurityTrustHtml(item.text);
  }
}
