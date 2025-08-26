import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent {
  steps: Step[] = [
    {
      number: "01",
      title: "Faça o Upload",
      description: "Envie seu documento em Word, PDF ou texto simples. Nosso sistema aceita diversos formatos acadêmicos."
    },
    {
      number: "02",
      title: "Análise Inteligente",
      description: "Nossa IA analisa seu conteúdo e identifica automaticamente todos os elementos que precisam ser formatados."
    },
    {
      number: "03",
      title: "Formatação ABNT",
      description: "Aplicamos todas as normas ABNT: margens, fontes, espaçamentos, citações, referências e muito mais."
    }
  ];
}
