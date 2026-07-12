import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';

export interface Task {
  _id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Todo' | 'In Progress' | 'Done';
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API_BASE_URL}/tasks`);
  }

  getTask(id: string): Observable<Task> {
    return this.http.get<Task>(`${API_BASE_URL}/tasks/${id}`);
  }

  createTask(payload: {
    title: string;
    description?: string;
    priority?: Task['priority'];
    status?: Task['status'];
  }): Observable<Task> {
    return this.http.post<Task>(`${API_BASE_URL}/tasks`, payload);
  }

  updateTask(id: string, payload: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${API_BASE_URL}/tasks/${id}`, payload);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${API_BASE_URL}/tasks/${id}`);
  }
}
