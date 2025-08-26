import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
    // Funcionalidade simplificada para MVP - apenas fechar menus
    console.log('Seção:', section);
    this.isMenuOpen = false;
    this.isUserMenuOpen = false;
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile']);
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
    // Por enquanto retornando plano fixo - implementar lógica real futuramente
    return this.user?.role === 'admin' ? 'Premium' : 'Gratuito';
  }
}
