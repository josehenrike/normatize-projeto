import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isLoading: boolean = false;
  acceptTerms: boolean = false;

  constructor(private router: Router) { }

  onSubmit() {
    if (this.isFormValid()) {
      this.isLoading = true;

      // Simular registro (substituir por lógica real de registro)
      setTimeout(() => {
        this.isLoading = false;
        console.log('Registro realizado:', {
          name: this.name,
          email: this.email,
          password: this.password
        });
        // Redirecionar para dashboard ou página de boas-vindas após registro
        this.router.navigate(['/dashboard']);
      }, 2000);
    }
  }

  isFormValid(): boolean {
    return !!(
      this.name &&
      this.email &&
      this.password &&
      this.confirmPassword &&
      this.password === this.confirmPassword &&
      this.acceptTerms
    );
  }

  passwordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  goBack() {
    this.router.navigate(['/']);
  }

  navigateToLogin(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.router.navigate(['/login']);
  }
}
