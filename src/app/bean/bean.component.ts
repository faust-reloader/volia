import { Component } from '@angular/core';
import { beanHarvesters } from '../shared/data';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'bean.component.html'
})

export class BeanComponent {
  beanHarvesters = beanHarvesters;
  beanRows = Array.from(Array(Math.ceil(beanHarvesters.length / 4)).keys());
}
