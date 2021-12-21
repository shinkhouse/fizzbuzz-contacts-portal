import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyListingComponent } from './empty-listing.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    EmptyListingComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    EmptyListingComponent
  ]
})
export class EmptyListingModule { }
