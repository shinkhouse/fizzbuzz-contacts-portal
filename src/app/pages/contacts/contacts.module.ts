import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactDetailsModule } from 'src/app/core/components/contact-details/contact-details.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ListingModule } from 'src/app/core/components/listing/listing.module';

@NgModule({
    declarations: [ContactsComponent],
    imports: [
        CommonModule,
        ContactDetailsModule,
        ContactsRoutingModule,
        FlexLayoutModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        ListingModule
    ],
    exports: [ContactsComponent],
})
export class ContactsModule {}
