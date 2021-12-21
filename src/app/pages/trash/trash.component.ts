import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
    selector: 'app-trash',
    templateUrl: './trash.component.html',
    styleUrls: ['./trash.component.scss'],
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
