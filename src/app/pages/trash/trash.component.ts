import { Component, OnInit } from '@angular/core';
import { ListingComponent } from 'src/app/core/components/listing/listing.component';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
    selector: 'app-trash',
    templateUrl: './trash.component.html',
    styleUrls: ['./trash.component.scss'],
    standalone: true,
    imports: [ListingComponent]
})
export class TrashComponent implements OnInit {
    public contactList: Contact[];
    constructor(private contacts: ContactsService) {}

    ngOnInit(): void {
        this.getContacts();
    }

    getContacts() {
        this.contactList = this.contacts.getContactsInTrash();
    }
}
