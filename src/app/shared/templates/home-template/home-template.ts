import { Component } from '@angular/core';
import { TestimonialCarousel } from '../../organism/testimonial-carousel/testimonial-carousel';
import { ServiceCarousel } from "../../organism/service-carousel/service-carousel";
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { CTASection } from "../../molecules/cta-section/cta-section";

@Component({
  selector: 'app-home-template',
  imports: [TestimonialCarousel, ServiceCarousel, HeroHeaderComponent, CTASection],
  templateUrl: './home-template.html',
  styleUrl: './home-template.scss'
})
export class HomeTemplate {
  heroData = {
    title: 'Proyección 3D BIC',
    subtitle: 'Transformando Ideas en Realidad',
    description: 'Desde el concepto hasta la creación, ofrecemos soluciones de impresión 3D de vanguardia para diseñadores, ingenieros y empresas.',
    highlightedWord: '3D',
    heroImage: '/assets/images/hero-tech.jpg',
    buttons: [
      {
        label: 'Nuestros Servicios',
        path: '/services',
        variant: 'primary' as const,
        icon: 'fas fa-arrow-right'
      },
      {
        label: 'Ver Portafolio',
        path: '/portfolio',
        variant: 'secondary' as const
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
