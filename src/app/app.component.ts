import {
    BreakpointObserver,
    Breakpoints,
    MediaMatcher,
} from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {
    MatDrawer,
    MatDrawerMode,
    MatSidenav,
} from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactsService } from './core/services/contacts.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public drawerMode: MatDrawerMode;
    public isDrawerOpen: boolean;
    @ViewChild('drawer') drawer: MatSidenav;

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private mediaMatcher: MediaMatcher,
        private breakpointObserver: BreakpointObserver,
        public contacts: ContactsService
    ) {
        this.matIconRegistry.addSvgIcon(
            'fizz_buzz',
            this.domSanitizer.bypassSecurityTrustResourceUrl(
                '../assets/icons/fizz-buzz.svg'
            )
        );
        const layoutChanges = breakpointObserver.observe([
            '(max-width: 1025px)',
        ]);
        layoutChanges.subscribe((result) => {
            console.log(result);
                if (result.matches) {
                    this.drawerMode;
                    this.isDrawerOpen = false;
                } else {
                    this.drawerMode = 'side';
                    this.isDrawerOpen = true;
                }
        });
    }

    ngOnInit(): void {
        // this.drawer.open();
    }
}
