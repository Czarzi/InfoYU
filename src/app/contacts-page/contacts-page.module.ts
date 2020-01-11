import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContactsPageRoutingModule } from './contacts-page-routing.module';
import { ContactsPageComponent } from './contacts-page.component';

@NgModule({
    imports: [
    CommonModule,
    ContactsPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
    declarations: [ContactsPageComponent],
})

export class ContactsPageModule { }