import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactDetailsComponent } from 'src/app/core/components/contact-details/contact-details.component';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
    public contactList: Contact[];

    constructor(private contacts: ContactsService, private dialog: MatDialog, private snackbar: MatSnackBar) {}

    ngOnInit(): void {
        this.getContacts();
    }

    getContacts() {
        this.contactList = this.contacts.getContacts() as Contact[];
    }

    openContactDetails(contactDetails: Contact) {
        this.dialog.open(ContactDetailsComponent, {
            minWidth: '400px',
            data: {
                contactDetails
            }
        })
    }

    favoriteContact(favorited: boolean, index: number) {
        this.contactList[index].favorite = !favorited;
        this.snackbar.open(`
            You ${!favorited ? 'favorited' : 'unfavorited'} contact ${this.contactList[index].firstName} ${this.contactList[index].lastName}
        `)
    }
}
