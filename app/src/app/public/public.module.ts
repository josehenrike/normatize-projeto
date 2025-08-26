import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Componentes da Landing Page
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';

// Rotas do módulo público
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' as const }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // Componentes standalone
    LandingComponent,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  exports: [
    RouterModule,
    LandingComponent
  ]
})
export class PublicModule { }
