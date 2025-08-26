import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  /**
   * Rola para uma seção específica com comportamento suave
   * @param sectionId ID da seção para rolar
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Usa scroll suave para melhor experiência do usuário
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  /**
   * Rola para uma seção específica com offset do header
   * @param sectionId ID da seção para rolar
   * @param headerOffset Altura do header fixo (padrão: 80px)
   */
  scrollToSectionWithOffset(sectionId: string, headerOffset: number = 80): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Rola para o topo da página com comportamento suave
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Retorna a posição atual do scroll
   */
  getCurrentScrollPosition(): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  /**
   * Verifica se uma seção está visível na viewport
   * @param sectionId ID da seção
   * @returns true se a seção está visível
   */
  isSectionVisible(sectionId: string): boolean {
    const element = document.getElementById(sectionId);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    return rect.top < windowHeight && rect.bottom > 0;
  }
}
