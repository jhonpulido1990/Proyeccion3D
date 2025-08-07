import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about-history-section',
  imports: [],
  templateUrl: './about-history-section.html',
  styleUrl: './about-history-section.scss'
})
export class AboutHistorySection {
  title = input<string>('Nuestra Historia');
  image = input<string>('assets/images/Andres-Mosca.png');
  imageAlt = input<string>('Nuestras instalaciones de impresión 3D');
  paragraphs = input<string[]>([
    'Fundada en 2020, Proyección 3D nació con un propósito claro: llevar la ingeniería de precisión al alcance de la industria colombiana, combinando tecnologías de vanguardia con expertise local.',
    'Lo que comenzó como un pequeño taller en Bogotá con un escáner 3D y una impresora básica, hoy es un centro especializado con:',
    'Equipos de última generación: Escáneres láser de 0.01 mm de precisión, software de simulación FEA y herramientas BIM.',
    'Un equipo multidisciplinario de ingenieros mecánicos, diseñadores y expertos en manufactura aditiva.',
    'Más de 150 proyectos ejecutados en sectores clave como energía, automotriz, alimentos y construcción.',
  ]);
}
