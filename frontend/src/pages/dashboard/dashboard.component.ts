import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  toggleTask(task: Task): void {
    this.taskService
      .updateTask(task._id, {
        title: task.title,
        description: task.description,
        completed: !task.completed
      })
      .subscribe((updated) => {
        this.tasks = this.tasks.map((item) => (item._id === updated._id ? updated : item));
      });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task._id).subscribe(() => {
      this.tasks = this.tasks.filter((item) => item._id !== task._id);
    });
  }
}
