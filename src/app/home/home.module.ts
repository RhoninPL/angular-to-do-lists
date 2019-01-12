import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoneTaskComponent } from '../done-task/done-task.component';
import { TodoTaskComponent } from '../todo-task/todo-task.component';
import { ToDoListsModule } from '../to-do-lists/to-do-lists.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    ToDoListsModule
  ],
  declarations: [
    HomeComponent,
    DoneTaskComponent,
    TodoTaskComponent
  ]
})
export class HomeModule { }
