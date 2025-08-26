import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(
    private scrollService: ScrollService,
    private router: Router
  ) { }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.scrollService.scrollToSectionWithOffset(sectionId, 80);
    this.isMenuOpen = false;
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
    this.isMenuOpen = false; // Fechar menu mobile após navegação
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
    this.isMenuOpen = false; // Fechar menu mobile após navegação
  }
}
