import { Component } from '@angular/core';
import { CTASection } from "../../molecules/cta-section/cta-section";
import { signal } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";

@Component({
  selector: 'app-projects-template',
  imports: [CTASection, HeroHeaderComponent],
  templateUrl: './projects-template.html',
  styleUrl: './projects-template.scss'
})
export class ProjectsTemplate {

  // Portfolio
  portfolioHeroData = signal({
    title: 'Nuestro Portafolio',
    description: 'Explora nuestra diversa gama de proyectos de impresión 3D en varias industrias.',
    config: {
      layout: 'hero-with-background' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2000&auto=format&fit=crop',
      hasOverlay: true,
      maxWidth: '48rem'
    }
  });

  ctaData = signal({
    title: '¿Listo para Dar Vida a tus Ideas?',
    description: 'Contáctanos hoy para discutir tu proyecto y descubrir cómo nuestras soluciones de impresión 3D pueden ayudarte a innovar más rápido.',
    backgroundImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop',
    highlightedWord: 'Ideas',
    button: {
      label: 'Contáctanos',
      path: '/contact',
      variant: 'primary' as const,
      icon: 'pi pi-phone'
    }
  });
}
