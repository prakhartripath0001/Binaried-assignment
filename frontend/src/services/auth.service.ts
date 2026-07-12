import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { API_BASE_URL } from './api.config';

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'task_manager_token';

  constructor(private http: HttpClient, private router: Router) {}

  register(payload: { name: string; email: string; password: string }): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${API_BASE_URL}/register`, payload)
      .pipe(tap((response) => this.setToken(response.token)));
  }

  login(payload: { email: string; password: string }): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${API_BASE_URL}/login`, payload)
      .pipe(tap((response) => this.setToken(response.token)));
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return Boolean(this.getToken());
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
}
