import { Injectable } from '@angular/core';
import { Contacts } from '../contacts.mock';
import { Contact } from '../models/contact.model';

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    private contacts = Contacts;
    constructor() {}

    getContacts(): Contact[] {
        return this.contacts.sort((a, b) => {
            if (a.firstName > b.firstName) {
                return 1;
            } else {
                return -1;
            }
        });
    }

    getFavoriteContacts(): Contact[] {
        return this.contacts.filter((contact: Contact, index: number) => {
            return contact.favorite === true;
        });
    }

    getFrequentContacts(): Contact[] {
        return this.contacts.sort((a, b) => {
            if (a.lastContacted > b.lastContacted) {
                return 1;
            } else {
                return -1;
            }
        });
    }

    getContactsInTrash(): Contact[] {
        return this.contacts.filter((contact: Contact, index: number) => {
            return contact.inTrash === true;
        });
    }

    getContactById(contactId: number): Contact | undefined {
        return this.contacts.find((contact: Contact, index: number) => {
            return contact.id === contactId;
        });
    }

    findContactByFullName(fullName: string): Contact[] {
        return this.contacts;
    }

    getContactsByTag(label: string) {
        return this.contacts.filter((contact: Contact, index: number) => {
            return contact.label === label;
        });
    }

    getContactTags() {
        let tags: any[] = [];
        tags = this.contacts.map((contact) => {
            return contact.label;
        }).filter((label) => {
            console.log('label', label,typeof label === 'string');
            return label != null;
        });

        return tags.reduce((a, b) => {
            if (a.indexOf(b) < 0) {
                if (typeof b === 'string') {
                    a.push(b);
                }
            }
            return a;
        }, []);
        return tags;
    }
}
