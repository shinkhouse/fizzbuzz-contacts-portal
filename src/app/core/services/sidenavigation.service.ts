import { Injectable } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Injectable({
    providedIn: 'root',
})
export class SidenavigationService {
    constructor() {}

    private sidenav: MatDrawer;

    public setSidenav(sidenav: MatDrawer) {
        console.log(sidenav);
        this.sidenav = sidenav;
    }

    public open() {
        return this.sidenav.open();
    }

    public close() {
        return this.sidenav.close();
    }

    public toggle(): void {
        this.sidenav.toggle();
    }
}
