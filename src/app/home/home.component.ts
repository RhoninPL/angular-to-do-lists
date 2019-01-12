import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public taskForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
    private tasksService: TasksService) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      newTask: ''
    });
  }

  save() {
    this.tasksService.add({
      name: this.taskForm.get('newTask').value,
      isDone: false
    });
    this.taskForm.reset();
  }
}
