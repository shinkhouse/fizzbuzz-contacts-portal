import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';
import { SidenavigationService } from '../../services/sidenavigation.service';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public searchTextInput: string;
    public contactList: Contact[];
    filteredOptions: Observable<Contact[]>;
    myControl = new FormControl();

    constructor(
        private sidenav: SidenavigationService,
        private contacts: ContactsService
    ) {}

    ngOnInit() {
        this.getContacts();
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value) => (typeof value === 'string' ? value : value.name)),
            map((name) =>
                this._filter(name)
            )
        );
    }

    contactDisplayFn(user: Contact): string {
        return user && user.firstName
            ? user.firstName + ' ' + user.lastName
            : '';
    }

    private _filter(name: string): Contact[] {
        const filterValue = name.toLowerCase();
        console.log('filter', filterValue);

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
}
