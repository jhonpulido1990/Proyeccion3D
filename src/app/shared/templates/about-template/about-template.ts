import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { CommonModule } from '@angular/common';
import { CTASection } from "../../molecules/cta-section/cta-section";
import { signal } from '@angular/core';
import { TeamSection } from "../../organism/team-section/team-section";
import { TeamMemberData } from '../../../core/models/interfaces/TeamMember.interface';
import { StatData, ValueData } from '../../../core/models/interfaces/DatosEstadistica.interface';
import { AboutHistorySection } from "../../organism/about-history-section/about-history-section";
import { StatsSection } from "../../organism/stats-section/stats-section";
import { QuoteSection } from "../../organism/quote-section/quote-section";
import { MissionValuesSection } from "../../organism/mission-values-section/mission-values-section";

@Component({
  selector: 'app-about-template',
  imports: [HeroHeaderComponent, CommonModule, CTASection, TeamSection, AboutHistorySection, StatsSection, QuoteSection, MissionValuesSection],
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
  // En tu home-template.ts o donde uses la sección
  teamMembers = signal<TeamMemberData[]>([
    {
      id: 'sara-jimenez',
      name: 'Sara Jiménez',
      position: 'CEO y Fundadora',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      bio: 'Líder visionaria con más de 10 años en tecnología de fabricación.',
      email: 'sara@proyeccion3dbic.com',
      linkedin: 'https://linkedin.com/in/sara-jimenez'
    },
    {
      id: 'miguel-chen',
      name: 'Miguel Chen',
      position: 'Director de Diseño',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      bio: 'Especialista en diseño industrial y prototipado rápido.',
      email: 'miguel@proyeccion3dbic.com'
    },
    {
      id: 'elena-rodriguez',
      name: 'Elena Rodríguez',
      position: 'Ingeniera Principal',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
      bio: 'Experta en ingeniería de materiales y optimización de procesos.'
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      position: 'Gerente de Producción',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      bio: 'Especialista en gestión de producción y control de calidad.'
    }
  ]);

  // En tu home-template.ts o donde uses las secciones
  statsData = signal<StatData[]>([
    {
      id: 'clients',
      icon: 'bi-people',
      value: '500',
      label: 'Clientes Satisfechos'
    },
    {
      id: 'awards',
      icon: 'bi-award',
      value: '12',
      label: 'Premios de la Industria'
    },
    {
      id: 'experience',
      icon: 'bi-clock',
      value: '10',
      label: 'Años de Experiencia'
    },
    {
      id: 'projects',
      icon: 'bi-lightbulb',
      value: '2500',
      label: 'Proyectos Completados'
    }
  ]);

  valuesData = signal<ValueData[]>([
    {
      id: 'innovation',
      title: 'Innovación',
      description: 'Exploramos continuamente nuevas tecnologías y técnicas para ampliar los límites de lo que es posible con la impresión 3D.'
    },
    {
      id: 'quality',
      title: 'Calidad',
      description: 'Mantenemos rigurosos estándares de control de calidad para garantizar que cada impresión cumpla con nuestras exigentes especificaciones.'
    },
    {
      id: 'sustainability',
      title: 'Sostenibilidad',
      description: 'Estamos comprometidos con prácticas ambientalmente responsables, desde la selección de materiales hasta la reducción de residuos.'
    }
  ]);
}
