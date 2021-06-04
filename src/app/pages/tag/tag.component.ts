import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
    public contactList: Contact[]
    constructor(private contacts: ContactsService, route: ActivatedRoute) {
        route.params.subscribe((params) => {
            console.log(params);
            this.getContactsByTag(params.id);
        });
    }

    ngOnInit(): void {}

    getContactsByTag(tag: string) {
        this.contactList = this.contacts.getContactsByTag(tag);
    }
}
