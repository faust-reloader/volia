import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeanRoutingModule } from './bean-routing.module';
import { BeanComponent } from './bean.component';
import { BeanCardComponent } from './bean-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BeanRoutingModule,
    SharedModule,
  ],
  declarations: [
    BeanComponent,
    BeanCardComponent,
  ]
})
export class BeanModule {
}
