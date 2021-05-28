import { Injectable } from '@angular/core';
import { Contacts } from '../contacts.mock';
import { Contact } from '../models/contact.model';

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    constructor() {}

    getContacts(): Contact[] {
        return Contacts;
    }

    getFavoriteContacts(): Contact[] {
        return this.getContacts().filter((contact: Contact, index: number) => {
            return contact.favorite === true;
        })
    }

    getContactsInTrash(): Contact[] {
        return this.getContacts().filter((contact: Contact, index: number) => {
            return contact.inTrash === true;
        })
    }

    getContactById(contactId: number): Contact | undefined {
        return this.getContacts().find((contact: Contact, index: number) => {
            return contact.id === contactId;
        });
    }

    findContactByFullName(fullName: string): Contact[] {
        return this.getContacts();
    }

}
