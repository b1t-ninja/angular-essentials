import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() id?: string
  @Input() name?: string
  isAddingTask = false

  constructor(private tasksService: TasksService) {}

  get selectedUsersTasks() {
    return this.tasksService.getUserTasks(this.id!)
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCloseAddTask() {
    this.isAddingTask = false
  }
}
