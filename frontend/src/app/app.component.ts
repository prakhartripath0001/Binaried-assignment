import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>Task Manager</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/dashboard">Dashboard</button>
      <button mat-button routerLink="/tasks/create" *ngIf="authService.isAuthenticated()">Create Task</button>
      <button mat-button routerLink="/login" *ngIf="!authService.isAuthenticated()">Login</button>
      <button mat-button routerLink="/register" *ngIf="!authService.isAuthenticated()">Register</button>
      <button mat-button type="button" *ngIf="authService.isAuthenticated()" (click)="logout()">Logout</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
    `
  ]
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
