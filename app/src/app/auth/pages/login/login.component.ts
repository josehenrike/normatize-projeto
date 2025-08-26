import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) { }

  onSubmit() {
    if (this.email && this.password) {
      this.isLoading = true;

      // Simular login (substituir por lógica real de autenticação)
      setTimeout(() => {
        this.isLoading = false;
        console.log('Login realizado:', { email: this.email, password: this.password });
        // Redirecionar para dashboard ou página principal após login
        this.router.navigate(['/dashboard']);
      }, 1500);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  navigateToRegister(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.router.navigate(['/register']);
  }
}
