import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent {
  form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
    priority: ['Medium', Validators.required],
    status: ['Todo', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {}

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.taskService.createTask(this.form.getRawValue()).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
