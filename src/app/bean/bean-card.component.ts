import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bean-card',
  templateUrl: './bean-card.component.html',
  styleUrls: ['./bean-card.component.css']
})
export class BeanCardComponent {
  @Input() bean;
  @Output() selected = new EventEmitter();
  cardClick() { this.selected.emit(this.bean.img); }
}
