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
import { SidenavigationService } from './core/services/sidenavigation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    public contactsLength = this.contacts.getContacts().length;
    public contactTags = this.contacts.getContactTags();
    public drawerMode: MatDrawerMode;
    public isDrawerOpen: boolean;
    @ViewChild('drawer') drawer: MatDrawer;

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private mediaMatcher: MediaMatcher,
        private breakpointObserver: BreakpointObserver,
        public contacts: ContactsService,
        private sidenav: SidenavigationService
    ) {
        this.matIconRegistry.addSvgIcon(
            'fizz_buzz',
            this.domSanitizer.bypassSecurityTrustResourceUrl(
                './assets/icons/fizz-buzz.svg'
            )
        );
        const layoutChanges = breakpointObserver.observe([
            '(max-width: 1025px)',
        ]);
        layoutChanges.subscribe((result) => {
            console.log(result);
                if (result.matches) {
                    this.drawerMode = 'over';
                    this.isDrawerOpen = false;
                } else {
                    this.drawerMode = 'side';
                    this.isDrawerOpen = true;
                }
        });

        this.sidenav.setSidenav(this.drawer);
    }

    ngOnInit(): void {
        // this.drawer.open();
    }

    ngAfterViewInit() {
        this.sidenav.setSidenav(this.drawer);
    }
}
