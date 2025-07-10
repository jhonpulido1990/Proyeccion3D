import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { CommonModule } from '@angular/common';
import { CTASection } from "../../molecules/cta-section/cta-section";

@Component({
  selector: 'app-about-template',
  imports: [HeroHeaderComponent, CommonModule, CTASection],
  templateUrl: './about-template.html',
  styleUrl: './about-template.scss'
})
export class AboutTemplate {
  heroData = {
    title: 'Sobre Nuestra Empresa',
    subtitle: 'Innovación y Excelencia en Impresión 3D',
    description: 'Estamos en una misión para revolucionar la fabricación a través de soluciones innovadoras de impresión 3D. Con años de experiencia y tecnología de vanguardia, transformamos ideas en realidad tangible.',
    highlightedWord: '3D',
    heroImage: '/assets/images/about-hero.jpg', // Puedes usar una imagen específica para About
    buttons: [
      {
        label: 'Nuestra Historia',
        path: '/about/historia',
        variant: 'primary' as const,
        icon: 'fas fa-book'
      },
      {
        label: 'Conoce al Equipo',
        path: '/about/equipo',
        variant: 'secondary' as const,
        icon: 'fas fa-users'
      },
      {
        label: 'Contactanos',
        path: '/contact',
        variant: 'outline' as const,
        icon: 'fas fa-phone'
      }
    ]
  };

  ctaData = {
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
  };
}
