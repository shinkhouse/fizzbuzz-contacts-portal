import {
    BreakpointObserver,
    Breakpoints,
    MediaMatcher,
} from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import {
    MatDrawer,
    MatDrawerMode,
    MatSidenav,
    MatSidenavModule,
} from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactDetailsComponent } from './core/components/contact-details/contact-details.component';
import { Contacts } from './core/mock/contacts.mock';
import { ContactsService } from './core/services/contacts.service';
import { SidenavigationService } from './core/services/sidenavigation.service';
import { NgFor } from '@angular/common';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        RouterLinkActive,
        MatListModule,
        FlexModule,
        NgFor,
        RouterOutlet,
        HeaderComponent,
    ],
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
        private sidenav: SidenavigationService,
        private dialog: MatDialog
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
        if (!localStorage.getItem('contacts')) {
            localStorage.setItem('contacts', JSON.stringify(Contacts));
        }
    }

    ngAfterViewInit() {
        this.sidenav.setSidenav(this.drawer);
    }

    openCreateContact() {
        this.dialog.open(ContactDetailsComponent, {
            minWidth: '700px',
            panelClass: 'contact-modal',
        });
    }
}
