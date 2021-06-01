import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { ContactsRoutingModule } from 'src/app/pages/contacts/contacts-routing.module';
import { ContactDetailsModule } from '../contact-details/contact-details.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [ListingComponent],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        ContactDetailsModule,
        FlexLayoutModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
    ],
    exports: [ListingComponent],
})
export class ListingModule {}
