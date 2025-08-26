import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  plans: Plan[] = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "sempre",
      description: "Perfeito para experimentar o NORMATIZE",
      features: [
        "3 documentos por mês",
        "Formatação básica ABNT",
        "Suporte por email",
        "Documentos até 10 páginas"
      ],
      cta: "Começar Grátis",
      popular: false
    },
    {
      name: "Mensal",
      price: "R$ 2,90",
      period: "/mês",
      description: "Ideal para quem precisa de um plano mensal",
      features: [
        "Documentos ilimitados",
        "Formatação completa ABNT",
        "Suporte prioritário",
        "Suporte 24/7",
        "Documentos ilimitados em páginas",
        "Verificador de plágio básico",
        "Templates personalizados",
        "Acesso a todos os recursos"
      ],
      cta: "Escolher Plano",
      popular: true
    },
    {
      name: "Anual",
      price: "R$ 29,90",
      period: "/ano",
      description: "Ideal para quem precisa de um plano anual",
      features: [
        "Documentos ilimitados",
        "Formatação completa ABNT",
        "Suporte prioritário",
        "Suporte 24/7",
        "Documentos ilimitados em páginas",
        "Verificador de plágio básico",
        "Templates personalizados",
        "Acesso a todos os recursos"
      ],
      cta: "Escolher Plano",
      popular: false
    }
  ];
}
