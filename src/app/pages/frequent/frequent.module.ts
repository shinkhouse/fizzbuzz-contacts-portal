import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrequentRoutingModule } from './frequent-routing.module';
import { FrequentComponent } from './frequent.component';


@NgModule({
  declarations: [
    FrequentComponent
  ],
  imports: [
    CommonModule,
    FrequentRoutingModule
  ]
})
export class FrequentModule { }
