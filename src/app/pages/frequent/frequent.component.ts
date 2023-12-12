import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from 'src/app/core/services/contacts.service';
import { ListingComponent } from '../../core/components/listing/listing.component';

@Component({
    selector: 'app-frequent',
    templateUrl: './frequent.component.html',
    styleUrls: ['./frequent.component.scss'],
    standalone: true,
    imports: [ListingComponent],
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
