import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrequentRoutingModule } from './frequent-routing.module';
import { FrequentComponent } from './frequent.component';
import { ListingModule } from 'src/app/core/components/listing/listing.module';


@NgModule({
  declarations: [
    FrequentComponent
  ],
  imports: [
    CommonModule,
    FrequentRoutingModule,
    ListingModule
  ]
})
export class FrequentModule { }
