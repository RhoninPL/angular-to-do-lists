import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './models/task';
import { TaskListsService } from './to-do-lists/task-lists.service';
import { TaskList } from './models/taskList';

@Injectable()
export class TasksService {
  private storageKey = 'tasks';
  private defaultTaskList: TaskList;
  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksList =  new BehaviorSubject<Array<Task>>([]);

  constructor(private taskListsService: TaskListsService) {
    this.initialize();
  }

  initialize() {
    const tasksList = localStorage.getItem(this.storageKey);
    if (tasksList) {
      this.tasksListObs.next(JSON.parse(tasksList));
    } else {
      this.tasksListObs.next([]);
    }

    this.taskListsService.getTasksListObs().subscribe((tasks: Array<TaskList>) => {
      this.defaultTaskList = tasks.filter(t => t.selected === true)[0];
      this.tasksList.next(this.tasksListObs.value.filter(t => t.taskList === this.defaultTaskList.name));
    });

    this.tasksListObs.subscribe((tasks: Array<Task>) => {
      this.tasksList.next(tasks.filter(t => t.taskList === this.defaultTaskList.name));
    });
  }

  add(task: Task) {
    task.taskList = this.defaultTaskList.name;
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
    this.saveToLocalStorage();
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
    this.saveToLocalStorage();
  }

  done(task: Task) {
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
    this.saveToLocalStorage();
  }

  getTasksListObs(): Observable<Array<Task>> {
    // const tasks = this.tasksListObs.value.filter(t => t.taskList === this.defaultTaskList.name);

    // return this.tasksListObs.asObservable();
    return this.tasksList;
  }

  saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasksListObs.value));
  }
}
