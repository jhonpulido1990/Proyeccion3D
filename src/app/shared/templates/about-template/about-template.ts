import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { CommonModule } from '@angular/common';
import { CTASection } from "../../molecules/cta-section/cta-section";
import { signal } from '@angular/core';

@Component({
  selector: 'app-about-template',
  imports: [HeroHeaderComponent, CommonModule, CTASection],
  templateUrl: './about-template.html',
  styleUrl: './about-template.scss'
})
export class AboutTemplate {
  // Hero con fondo (About)
  aboutHeroData = signal({
    title: 'Sobre Nuestra Empresa',
    highlightedWords: ['Empresa'],
    description: 'Estamos en una misión para revolucionar la fabricación a través de soluciones innovadoras de impresión 3D.',
    config: {
      layout: 'hero-with-background' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1581093458791-9d2b88c0ed60?q=80&w=2000&auto=format&fit=crop',
      hasOverlay: true,
      overlayColor: 'rgb(15, 23, 42)',
      overlayOpacity: 0.7,
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
