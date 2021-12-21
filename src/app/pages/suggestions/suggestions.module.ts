import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { EmptyListingModule } from 'src/app/core/components/empty-listing/empty-listing.module';


@NgModule({
  declarations: [
    SuggestionsComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    EmptyListingModule
  ]
})
export class SuggestionsModule { }
