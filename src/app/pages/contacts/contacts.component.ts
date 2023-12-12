import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
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

    constructor(private contacts: ContactsService, private dialog: MatDialog) {}

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
}
