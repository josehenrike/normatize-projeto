import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  user: User | null = null;
  isMenuOpen = false;
  isUserMenuOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.user = user;
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Fechar user menu quando abrir menu principal
    if (this.isMenuOpen) {
      this.isUserMenuOpen = false;
    }
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  navigateToSection(section: string): void {
    if (section === 'format') {
      this.router.navigate(['/dashboard']);
    }
    this.isMenuOpen = false;
    this.isUserMenuOpen = false;
  }

  navigateToProfile(): void {
    // Já estamos no perfil, apenas fechar menus
    this.isMenuOpen = false;
    this.isUserMenuOpen = false;
  }

  navigateToPlans(): void {
    this.router.navigate(['/plans']);
    this.isMenuOpen = false;
    this.isUserMenuOpen = false;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    this.isMenuOpen = false;
    this.isUserMenuOpen = false;
  }

  getUserPlan(): string {
    return this.user?.role === 'admin' ? 'Mensal' : 'Gratuito';
  }

  openChangePassword(): void {
    // Implementar funcionalidade de alteração de senha
    console.log('Abrir formulário de alteração de senha');
    alert('Funcionalidade de alteração de senha será implementada em breve!');
  }


}
