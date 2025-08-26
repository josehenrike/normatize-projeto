import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
  loginError: string = '';

  // Estados para recuperação de senha
  showForgotPassword: boolean = false;
  forgotPasswordEmail: string = '';
  isRecoveryLoading: boolean = false;
  recoveryMessage: string = '';
  recoveryMessageType: 'success' | 'error' | '' = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    if (this.email && this.password) {
      this.isLoading = true;
      this.loginError = '';

      this.authService.login({ email: this.email, password: this.password })
        .subscribe({
          next: (result) => {
            this.isLoading = false;
            if (result.success) {
              console.log('Login realizado com sucesso:', result.user);
              this.router.navigate(['/dashboard']);
            } else {
              this.loginError = result.message || 'Erro no login';
            }
          },
          error: (error) => {
            this.isLoading = false;
            this.loginError = 'Erro interno do servidor';
            console.error('Erro no login:', error);
          }
        });
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

    this.authService.sendPasswordRecovery(this.forgotPasswordEmail)
      .subscribe({
        next: (result) => {
          this.isRecoveryLoading = false;
          this.recoveryMessage = result.message;
          this.recoveryMessageType = result.success ? 'success' : 'error';

          if (result.success) {
            // Voltar ao formulário de login após 3 segundos
            setTimeout(() => {
              this.hideForgotPasswordForm();
            }, 3000);
          }
        },
        error: (error) => {
          this.isRecoveryLoading = false;
          this.recoveryMessage = 'Erro interno do servidor';
          this.recoveryMessageType = 'error';
          console.error('Erro na recuperação:', error);
        }
      });
  }
}
