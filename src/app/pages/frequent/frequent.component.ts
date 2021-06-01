import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
    selector: 'app-frequent',
    templateUrl: './frequent.component.html',
    styleUrls: ['./frequent.component.scss'],
})
export class FrequentComponent implements OnInit {
    public contactList: Contact[];
    constructor(private contacts: ContactsService) {}

    ngOnInit(): void {
        this.getContacts();
    }

    getContacts() {
        this.contactList = this.contacts.getFrequentContacts();
    }
}
