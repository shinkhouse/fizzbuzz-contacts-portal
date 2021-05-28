import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactDetailsModule } from 'src/app/core/components/contact-details/contact-details.module';

@NgModule({
    declarations: [ContactsComponent],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        FlexLayoutModule,
        MatDialogModule,
        ContactDetailsModule
    ],
    exports: [ContactsComponent],
})
export class ContactsModule {}
