import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about-history-section',
  imports: [],
  templateUrl: './about-history-section.html',
  styleUrl: './about-history-section.scss'
})
export class AboutHistorySection {
  title = input<string>('Nuestra Historia');
  image = input<string>('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop');
  imageAlt = input<string>('Nuestras instalaciones de impresión 3D');
  paragraphs = input<string[]>([
    'Fundada en 2012, nuestra empresa comenzó con una visión simple: hacer que la tecnología avanzada de impresión 3D sea accesible para diseñadores, ingenieros y empresas de todos los tamaños.',
    'Lo que comenzó como un pequeño taller con dos impresoras ha crecido hasta convertirse en una instalación de última generación que alberga más de 30 impresoras 3D de grado industrial y un equipo de 25 profesionales calificados.',
    'Hoy, estamos orgullosos de servir a clientes en diversas industrias, desde automotriz y aeroespacial hasta productos de consumo y atención médica, ayudándoles a innovar más rápido y de manera más eficiente.'
  ]);
}
