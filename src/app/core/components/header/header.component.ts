import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';
import { SidenavigationService } from '../../services/sidenavigation.service';
import { filter, map, startWith } from 'rxjs/operators';
import { DOCUMENT, NgFor, NgIf, AsyncPipe } from '@angular/common';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
        MatToolbarModule,
        FlexModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        NgFor,
        MatOptionModule,
        NgIf,
        MatMenuModule,
        AsyncPipe,
    ],
})
export class HeaderComponent implements OnInit {
    public searchTextInput: string;
    public contactList: Contact[];
    filteredOptions: Observable<Contact[]>;
    myControl = new FormControl();

    constructor(
        private sidenav: SidenavigationService,
        private contacts: ContactsService,
        private dialog: MatDialog,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngOnInit() {
        this.getContacts();
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value) => (typeof value === 'string' ? value : value.name)),
            map((name) => this._filter(name))
        );
        if (localStorage.getItem('dark') === 'true') {
            this.document.body.classList.add('dark');
        } 
    }

    contactDisplayFn(user: Contact): string {
        return user && user.firstName
            ? user.firstName + ' ' + user.lastName
            : '';
    }

    private _filter(name: string): Contact[] {
        const filterValue = name.toLowerCase();

        if (filterValue.length > 0) {
            return this.contactList.filter((option) => {
                let fullName = option.firstName + ' ' + option.lastName;
                return fullName.toLowerCase().includes(filterValue);
            });
        } else {
            return [];
        }
    }

    getContacts() {
        this.contactList = this.contacts.getContacts() as Contact[];
    }

    toggleSidenav() {
        this.sidenav.toggle();
    }

    clearSearchField(): void {
        this.searchTextInput = '';
    }

    toggleDarkMode() {
        if(localStorage.getItem('dark') === 'true') {
            this.document.body.classList.remove('dark');
            localStorage.setItem('dark', 'false');
        } else {
            this.document.body.classList.add('dark');
            localStorage.setItem('dark', 'true');
        }
    }

    openContactDetails(contactDetails: Contact) {
        this.dialog.open(ContactDetailsComponent, {
            minWidth: '700px',
            panelClass: 'contact-modal',
            data: {contact: contactDetails}
        })
    }
}
