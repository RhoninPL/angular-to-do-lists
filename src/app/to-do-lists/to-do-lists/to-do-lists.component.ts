import { Component, OnInit } from '@angular/core';
import { TaskList } from './../../models/taskList';
import { TaskListsService } from '../task-lists.service';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var jQuery: any;
@Component({
  selector: 'app-to-do-lists',
  templateUrl: './to-do-lists.component.html',
  styleUrls: ['./to-do-lists.component.scss']
})
export class ToDoListsComponent implements OnInit {
  public taskLists: Array<TaskList> = [];
  public defaultTaskList: TaskList;
  public listForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
    private taskListsService: TaskListsService) {
    this.taskListsService.getTasksListObs().subscribe((tasks: Array<TaskList>) => {
      this.taskLists = tasks;
      this.defaultTaskList = tasks.filter(t => t.selected === true)[0];
    });
  }

  ngOnInit() {
    this.listForm = this.formBuilder.group({
      name: ''
    });
  }

  public change(task: TaskList) {
    this.taskListsService.change(task);
    jQuery('#chooseList').modal('toggle');
  }

  public save() {
    const newListName = this.listForm.get('name').value;
    if (this.taskLists.filter(t => t.name === newListName).length > 0) {
      alert('Taka lista już istnieje');

      return;
    }

    this.taskListsService.add({
      name: newListName,
      selected: false
    });
    this.listForm.reset();
    jQuery('#createNewList').modal('toggle');
  }
}
