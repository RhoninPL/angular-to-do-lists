import { TaskList } from './../models/taskList';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskListsService {
  private storageKey = 'taskList';

  private tasksListObs = new BehaviorSubject<Array<TaskList>>([]);

  constructor() {
    this.initialize();
  }

  initialize() {
    const tasksList = localStorage.getItem(this.storageKey);
    if (tasksList) {
      this.tasksListObs.next(JSON.parse(tasksList));
    } else {
      const domyslne = <TaskList>{
        name: 'Default',
        selected: true
      };
      this.tasksListObs.next([domyslne]);
      this.saveToLocalStorage();

    }
  }

  public add(task: TaskList) {
    console.log(task)
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
    this.saveToLocalStorage();
  }

  public change(task: TaskList) {
    const list = this.tasksListObs.getValue();
    list.forEach(t => {
      t.selected = false;
      if (t.name === task.name) {
        t.selected = true;
      }
    });

    this.tasksListObs.next(list);
    this.saveToLocalStorage();
  }

  public getTasksListObs(): Observable<Array<TaskList>> {
    return this.tasksListObs.asObservable();
  }

  saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasksListObs.value));
  }
}
