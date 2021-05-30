import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../../models/contact.model';

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
    public editMode: boolean;
    public contactForm: FormGroup;
    public contact: Contact;
    constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Contact) {
        if(data) {
            this.contact = data;
            this.editMode = false;
            this.initializeContactEditForm();
        } else {
            this.editMode = true;
            this.initializeNewContactForm();
        }
    }

    ngOnInit(): void {}

    initializeNewContactForm() {
        this.contactForm = this.fb.group({
            prefix: [''],
            firstName: ['', Validators.required],
            lastName: [''],
            suffix: [''],
            companyName: [''],
            jobTitle: [''],
            email: [''],
            emailType: [''],
            phone: [''],
            phoneType: [''],
            addresses: [''],
            birthday: [''],
            events: [''],
            notes: [''],
            website: [''],
            relationship: [''],
            chat: [''],
            internetCall: [''],
            nickname: [''],
            favorite: [''],
            lastContacted: [''],
            inTrash: ['false'],
            label: ['']
        });
    }

    initializeContactEditForm() {
        this.contactForm = this.fb.group({
            prefix: [this.contact.prefix],
            firstName: [this.contact.firstName, Validators.required],
            lastName: [this.contact.lastName],
            suffix: [this.contact.suffix],
            companyName: [this.contact.companyName],
            jobTitle: [this.contact.jobTitle],
            email: [this.contact.email],
            emailType: [''],
            phone: [this.contact.phone],
            phoneType: [''],
            addresses: [''],
            birthday: [this.contact.birthday],
            events: [''],
            notes: [this.contact.notes],
            website: [this.contact.website],
            relationship: [this.contact.relationship],
            chat: [this.contact.chat],
            internetCall: [this.contact.internetCall],
            nickname: [this.contact.nickname],
            favorite: [this.contact.favorite],
            lastContacted: [''],
            inTrash: ['false'],
            label: [this.contact.label]
        });
    }
}
