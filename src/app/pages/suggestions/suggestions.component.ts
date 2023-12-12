import { Component, OnInit } from '@angular/core';
import { EmptyListingComponent } from '../../core/components/empty-listing/empty-listing.component';

@Component({
    selector: 'app-suggestions',
    templateUrl: './suggestions.component.html',
    styleUrls: ['./suggestions.component.scss'],
    standalone: true,
    imports: [EmptyListingComponent]
})
export class SuggestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
