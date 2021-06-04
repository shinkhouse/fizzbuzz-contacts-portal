import { Component, OnInit } from '@angular/core';
import { SidenavigationService } from '../../services/sidenavigation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public searchTextInput: string;
    constructor(private sidenav: SidenavigationService) {}

    ngOnInit(): void {}

    toggleSidenav() {
        this.sidenav.toggle();
    }

    clearSearchField(): void {
        this.searchTextInput = '';
    }
}
