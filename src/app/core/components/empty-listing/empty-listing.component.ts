import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-empty-listing',
    templateUrl: './empty-listing.component.html',
    styleUrls: ['./empty-listing.component.scss'],
    standalone: true,
    imports: [MatIconModule]
})
export class EmptyListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
