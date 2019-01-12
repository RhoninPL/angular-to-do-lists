import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListsComponent } from './to-do-lists/to-do-lists.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ToDoListsComponent],
  exports: [
    ToDoListsComponent
  ]
})
export class ToDoListsModule { }
