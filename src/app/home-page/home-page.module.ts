import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
    declarations: [HomePageComponent],
})

export class HomePageModule { }