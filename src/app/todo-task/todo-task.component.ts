import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../tasks.service';
import { TaskListsService } from '../to-do-lists/task-lists.service';
import { TaskList } from '../models/taskList';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {
  public tasksTodo: Array<Task> = [];
  public defaultTaskList: TaskList;

  constructor(private tasksService: TasksService,
    private taskListsService: TaskListsService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksTodo = tasks.filter(t => t.isDone === false);
    });
    this.taskListsService.getTasksListObs().subscribe((tasks: Array<TaskList>) => {
      this.defaultTaskList = tasks.filter(t => t.selected === true)[0];
    });
  }
  ngOnInit() {
  }

  public remove(task: Task) {
    this.tasksService.remove(task);
  }

  public done(task: Task) {
    this.tasksService.done(task);
  }
}
