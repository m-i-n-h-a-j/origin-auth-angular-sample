import { Component, inject, signal } from '@angular/core';
import { AuthService } from './auth/auth-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('origin-auth-angular-sample');
  authService = inject(AuthService);

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
