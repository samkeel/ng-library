import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { SharedModule } from '../shared/shared.module';
import { QuillModule } from 'ngx-quill'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewEntryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ]
})
export class AdminModule { }
