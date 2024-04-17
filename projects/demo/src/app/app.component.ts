import { Component } from '@angular/core';
import { Credentials } from '../../../auth/src/lib/interfaces/credentials.interface';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo';

  constructor(private authService: AuthService) {}

  handleLogin(credentials: Credentials) {
    this.authService
      .login(credentials.username, credentials.password)
      .subscribe(
        () => {
          console.log('Login successful');
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }

  handleRegistration(credentials: Credentials) {
    this.authService
      .register(credentials.username, credentials.password)
      .subscribe(
        () => {
          console.log('Registration successful');
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
  }
}
