import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user);
    alert('User registered successfully!');
  }
}
