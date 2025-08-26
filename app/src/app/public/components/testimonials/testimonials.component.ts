import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Testimonial {
  name: string;
  role: string;
  institution: string;
  content: string;
  avatar: SafeHtml;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const avatarIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`;

    this.testimonials = [
      {
        name: 'Carla Luanne',
        role: 'Estudante de Direito',
        institution: 'UNIRV',
        content: 'O NORMATIZE salvou minha dissertação! Em minutos, todo meu trabalho estava perfeitamente formatado seguindo as normas ABNT. Recomendo para todos os estudantes.',
        avatar: this.sanitizer.bypassSecurityTrustHtml(avatarIcon),
        rating: 5
      },
      {
        name: 'Lara Gabrielle',
        role: 'Estudante de Ciências Contábeis',
        institution: 'UNIRV',
        content: 'O NORMATIZE é uma ferramenta incrível! A formatação automática me ajudou a me concentrar no conteúdo e não na formatação. Recomendo!',
        avatar: this.sanitizer.bypassSecurityTrustHtml(avatarIcon),
        rating: 5
      },
      {
        name: 'Isabelle',
        role: 'Estudante de Ciências Contábeis',
        institution: 'UNIRV',
        content: 'Estava desesperada com as normas ABNT para meu TCC. O NORMATIZE foi a solução perfeita! Interface simples e resultado profissional.',
        avatar: this.sanitizer.bypassSecurityTrustHtml(avatarIcon),
        rating: 5
      }
    ];
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
