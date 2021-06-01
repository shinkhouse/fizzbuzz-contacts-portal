import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
    @Input() contactList: Contact[];

    constructor(
        private dialog: MatDialog,
        private snackbar: MatSnackBar
    ) {}

    ngOnInit(): void {}

    openContactDetails(contactDetails: Contact) {
        this.dialog.open(ContactDetailsComponent, {
            minWidth: '700px',
            panelClass: 'contact-modal',
            data: contactDetails,
        });
    }

    favoriteContact(favorited: boolean, index: number) {
        this.contactList[index].favorite = !favorited;
        this.snackbar.open(`
            You ${!favorited ? 'favorited' : 'unfavorited'} contact ${
            this.contactList[index].firstName
        } ${this.contactList[index].lastName}
        `);
    }
}
