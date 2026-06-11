import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  user = { username: '', email: '', password: '' };
  message = '';
  isError = false;
  passwordStrength = '';

  constructor(private authService: AuthService, private router: Router) {}

  hasUpper(p: string) { return /[A-Z]/.test(p); }
  hasLower(p: string) { return /[a-z]/.test(p); }
  hasNumber(p: string) { return /[0-9]/.test(p); }
  hasSpecial(p: string) { return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(p); }

  validatePassword(password: string): string | null {
    if (password.length < 8) return 'Password must be at least 8 characters!';
    if (!this.hasUpper(password)) return 'Password must contain at least 1 uppercase letter!';
    if (!this.hasLower(password)) return 'Password must contain at least 1 lowercase letter!';
    if (!this.hasNumber(password)) return 'Password must contain at least 1 number!';
    if (!this.hasSpecial(password)) return 'Password must contain at least 1 special character!';
    return null;
  }

  checkPasswordStrength(password: string) {
    if (!password) { this.passwordStrength = ''; return; }
    let score = 0;
    if (password.length >= 8) score++;
    if (this.hasUpper(password)) score++;
    if (this.hasLower(password)) score++;
    if (this.hasNumber(password)) score++;
    if (this.hasSpecial(password)) score++;
    if (score <= 2) this.passwordStrength = 'weak';
    else if (score <= 3) this.passwordStrength = 'medium';
    else if (score <= 4) this.passwordStrength = 'strong';
    else this.passwordStrength = 'very-strong';
  }

  onRegister() {
    if (!this.user.username || !this.user.email || !this.user.password) {
      this.message = 'Please fill in all fields!';
      this.isError = true;
      return;
    }
    const passwordError = this.validatePassword(this.user.password);
    if (passwordError) { this.message = passwordError; this.isError = true; return; }

    this.authService.register(this.user).subscribe({
      next: (response) => {
        if (response.includes('successfully')) {
          this.message = 'Registration successful! Please login.';
          this.isError = false;
          setTimeout(() => this.router.navigate(['/login']), 1500);
        } else { this.message = response; this.isError = true; }
      },
      error: () => { this.message = 'Registration failed. Please try again!'; this.isError = true; }
    });
  }
}