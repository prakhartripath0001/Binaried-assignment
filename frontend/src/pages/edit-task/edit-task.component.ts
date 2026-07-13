import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html'
})
export class EditTaskComponent implements OnInit {
  taskId = '';
  form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
    priority: ['Medium', Validators.required],
    status: ['Todo', Validators.required],
    completed: [false]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id') || '';

    this.taskService.getTask(this.taskId).subscribe((task) => {
      this.form.patchValue({
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        completed: task.completed
      });
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.taskService.updateTask(this.taskId, this.form.getRawValue() as Partial<Task>).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
