import { Injectable } from '@angular/core';
import { Contacts } from '../mock/contacts.mock';
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
        }).sort((a, b) => {
            if (a.firstName > b.firstName) {
                return 1;
            } else {
                return -1;
            }
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
        }).sort((a, b) => {
            if (a.firstName > b.firstName) {
                return 1;
            } else {
                return -1;
            }
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
        }).sort((a, b) => {
            if (a.firstName > b.firstName) {
                return 1;
            } else {
                return -1;
            }
        });
    }

    getContactTags() {
        let tags: any[] = [];
        tags = this.contacts.map((contact) => {
            return contact.label;
        }).filter((label) => {
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
