import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'contacts-clone';
    @ViewChild('drawer') drawer: MatSidenav;

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        this.matIconRegistry.addSvgIcon(
            'fizz_buzz',
            this.domSanitizer.bypassSecurityTrustResourceUrl(
                '../assets/icons/fizz-buzz.svg'
            )
        );
    }

    ngOnInit(): void {
        // this.drawer.open();
    }

}
