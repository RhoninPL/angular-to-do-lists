import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from './../tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {
  tasksDone: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks.filter(t => t.isDone === true);
    });
  }

  ngOnInit() {
  }

  public remove(task: Task) {
    this.tasksService.remove(task);
  }
}
