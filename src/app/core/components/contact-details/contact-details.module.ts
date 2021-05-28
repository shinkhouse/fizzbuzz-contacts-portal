import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from './contact-details.component';



@NgModule({
  declarations: [
    ContactDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContactDetailsComponent]
})
export class ContactDetailsModule { }
