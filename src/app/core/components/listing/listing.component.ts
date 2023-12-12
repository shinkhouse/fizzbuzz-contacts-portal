import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Contact } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgForOf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { DensitySelectorDialogComponent } from '../density-selector-dialog/density-selector-dialog.component';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss'],
    standalone: true,
    imports: [MatMenuModule, MatDialogModule, MatSnackBarModule, MatIconModule, MatButtonModule, FlexLayoutModule, NgForOf],
})
export class ListingComponent implements OnInit {
    @Input() contactList: Contact[];
    public density: 'comfortable' | 'cozy' = 'comfortable';

    constructor(private dialog: MatDialog, private snackbar: MatSnackBar) {}

    ngOnInit(): void {}

    openContactDetails(contactDetails: Contact, editMode: boolean) {
        this.dialog.open(ContactDetailsComponent, {
            minWidth: '700px',
            panelClass: 'contact-modal',
            data: {
                contact: contactDetails,
                editMode: editMode,
            },
        });
    }

    favoriteContact(favorited: boolean, index: number) {
        this.contactList[index].favorite = !favorited;
        this.snackbar.open(`
            You ${!favorited ? 'favorited' : 'unfavorited'} contact ${this.contactList[index].firstName} ${this.contactList[index].lastName}
        `);
    }

    openDensityDialog() {
        this.dialog
            .open(DensitySelectorDialogComponent, {
                minWidth: '300px',
                data: {
                    density: this.density,
                },
            })
            .afterClosed()
            .subscribe((density) => {
                if (density) {
                    this.density = density;
                }
            });
    }
}
