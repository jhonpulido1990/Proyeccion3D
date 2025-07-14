import { Component } from '@angular/core';
import { TestimonialCarousel } from '../../organism/testimonial-carousel/testimonial-carousel';
import { ServiceCarousel } from "../../organism/service-carousel/service-carousel";
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { CTASection } from "../../molecules/cta-section/cta-section";
import { SectionHero } from '../../organism/section-hero/section-hero';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home-template',
  imports: [TestimonialCarousel, ServiceCarousel, HeroHeaderComponent, CTASection, SectionHero],
  templateUrl: './home-template.html',
  styleUrl: './home-template.scss'
})
export class HomeTemplate {
  // Hero con imagen (Home)
  homeHeroData = {
    title: 'Proyección 3D BIC',
    highlightedWords: ['3D'],
    subtitle: 'Transformando Ideas en Realidad',
    description: 'Desde el concepto hasta la creación, ofrecemos soluciones de impresión 3D de vanguardia para diseñadores, ingenieros y empresas.',
    heroImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop',
    buttons: [
      { label: 'Nuestros Servicios', path: '/services', variant: 'primary' as const, icon: 'lucide-arrow-right' },
      { label: 'Ver Portafolio', path: '/portfolio', variant: 'secondary' as const }
    ],
    config: {
      layout: 'hero-with-image' as const,
      textAlign: 'left' as const
    }
  };


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

  aboutHeroData = signal({
    title: 'Transformando Ideas En Realidad',
    description: 'Somos un equipo de diseñadores e ingenieros apasionados dedicados a expandir los límites de lo posible con la tecnología de impresión 3D. Con años de experiencia, hemos ayudado a cientos de clientes a dar vida a sus visiones.',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Equipo de trabajo colaborando en impresión 3D',
    button: {
      label: 'Sobre Nosotros',
      path: '/about',
      variant: 'primary' as const
    }
  });
}
