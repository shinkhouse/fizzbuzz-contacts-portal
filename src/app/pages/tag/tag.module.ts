import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';
import { ListingModule } from 'src/app/core/components/listing/listing.module';


@NgModule({
  declarations: [
    TagComponent
  ],
  imports: [
    CommonModule,
    TagRoutingModule,
    ListingModule
  ]
})
export class TagModule { }
