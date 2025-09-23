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
    description: 'En Proyección 3D, ayudamos a empresas a modernizar sus operaciones',
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
      id: 'sebastian',
      name: 'Sebastián',
      position: 'Ingeniero de Proyectos',
      image: 'assets/images/Sebastian.jpeg',
      bio: 'Ingeniero mecánico especializado en procesos de laminación, modelado 3D e ingeniería inversa. Enfocado en la atención al cliente y desarrollo de soluciones técnicas innovadoras.',
    },
    {
      id: 'andres-mosca',
      name: 'Andrés Mosca',
      position: 'CEO y Fundador',
      image: 'assets/images/Andres-Mosca.png',
      bio: 'CEO con más de 10 años de experiencia en manufactura aditiva y transformación digital. Lidera la estrategia empresarial enfocada en modernización de procesos industriales y tecnologías de vanguardia.',
    },
    {
      id: 'wilson',
      name: 'Wilson',
      position: 'Ingeniera Mecánica',
      image: 'assets/images/Wilson.jpeg',
      bio: 'Ingeniero Mecánico especializado en modelado 3D, diseño industrial y sistemas de tuberías. Transforma conceptos en proyectos técnicamente precisos y eficientes.'
    },
    {
      id: 'sergio',
      name: 'Sergio',
      position: 'Ingeniero de Procesos',
      image: 'assets/images/Sergio.jpeg',
      bio: 'Ingeniero de Procesos especializado en ingeniería inversa y escáner 3D. Líder en transformación de componentes físicos a modelos digitales de alta precisión y optimización de diseños complejos.'
    }
  ]);

  // En tu home-template.ts o donde uses las secciones
  statsData = signal<StatData[]>([
    {
      id: 'clients',
      icon: 'bi-people',
      value: '50',
      label: 'Clientes Satisfechos'
    },
    {
      id: 'clock',
      icon: 'bi-clock',
      value: '2000',
      label: 'Horas de diseño'
    },
    {
      id: 'experience',
      icon: 'bi-calendar-check',
      //icon: 'bi-patch-check',
      value: '3',
      label: 'Años de Experiencia'
    },
    {
      id: 'projects',
      icon: 'bi-lightbulb',
      value: '250',
      label: 'Proyectos Completados'
    }
  ]);

  valuesData = signal<ValueData[]>([
    {
      id: 'innovation',
      title: 'Innovación',
      description: 'Fomentamos un entorno donde la creatividad y la innovación tecnológica prosperan, impulsando soluciones de vanguardia para nuestros clientes.'
    },
    {
      id: 'quality',
      title: 'Calidad',
      description: 'Nos comprometemos a entregar productos y servicios de la más alta calidad, asegurando la satisfacción total del cliente en cada proyecto.'
    },
    {
      id: 'sustainability',
      title: 'Sostenibilidad',
      description: 'Adoptamos prácticas sostenibles en todas nuestras operaciones, minimizando nuestro impacto ambiental y promoviendo un futuro más verde.'
    }
  ]);
}
