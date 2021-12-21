import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrashRoutingModule } from './trash-routing.module';
import { TrashComponent } from './trash.component';
import { ListingModule } from 'src/app/core/components/listing/listing.module';


@NgModule({
    declarations: [TrashComponent],
    imports: [CommonModule, TrashRoutingModule, ListingModule],
})
export class TrashModule {}
