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

  // Estados para recuperação de senha
  showForgotPassword: boolean = false;
  forgotPasswordEmail: string = '';
  isRecoveryLoading: boolean = false;
  recoveryMessage: string = '';
  recoveryMessageType: 'success' | 'error' | '' = '';

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

  // Métodos para recuperação de senha
  showForgotPasswordForm(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.showForgotPassword = true;
    this.recoveryMessage = '';
    this.recoveryMessageType = '';
  }

  hideForgotPasswordForm() {
    this.showForgotPassword = false;
    this.forgotPasswordEmail = '';
    this.recoveryMessage = '';
    this.recoveryMessageType = '';
  }

  sendRecoveryEmail() {
    if (!this.forgotPasswordEmail) {
      return;
    }

    this.isRecoveryLoading = true;
    this.recoveryMessage = '';

    // Simular envio de email (substituir por lógica real)
    setTimeout(() => {
      this.isRecoveryLoading = false;

      // Validação básica de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.forgotPasswordEmail)) {
        this.recoveryMessage = 'Por favor, insira um email válido.';
        this.recoveryMessageType = 'error';
        return;
      }

      this.recoveryMessage = 'Instruções de recuperação foram enviadas para seu email!';
      this.recoveryMessageType = 'success';

      // Voltar ao formulário de login após 3 segundos
      setTimeout(() => {
        this.hideForgotPasswordForm();
      }, 3000);
    }, 1500);
  }
}
