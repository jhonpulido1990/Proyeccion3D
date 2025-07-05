import { Component } from '@angular/core';
import { FooterBrand } from '../../molecules/footer-brand/footer-brand';
import { FooterSection } from '../../molecules/footer-section/footer-section';
import { FooterContact } from '../../molecules/footer-contact/footer-contact';
import { FooterCopyright } from '../../molecules/footer-copyright/footer-copyright';
import { FooterLink } from '../../../core/models/interfaces/FooterLink.interface';
import { FooterSectionData } from '../../../core/models/interfaces/FooterSection.interface';

@Component({
  selector: 'app-footer',
  imports: [FooterBrand, FooterSection, FooterContact, FooterCopyright],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  quickLinks: FooterSectionData = {
    title: 'Enlaces Rápidos',
    links: [
      { label: 'Inicio', path: '/' },
      { label: 'Nosotros', path: '/about' },
      { label: 'Servicios', path: '/service' },
      { label: 'Portafolio', path: '/project' },
      { label: 'Contacto', path: '/contact' },
    ],
  };

  services: FooterSectionData = {
    title: 'Servicios',
    links: [
      { label: 'Prototipado Rápido', path: '/service/prototipado' },
      { label: 'Impresión Multi-Material', path: '/service/multi-material' },
      { label: 'Producción en Serie', path: '/service/produccion' },
      { label: 'Servicios de Diseño', path: '/service/diseño' },
      { label: 'Escaneo 3D', path: '/service/escaneo' },
    ],
  };

  legalLinks: FooterLink[] = [
    { label: 'Política de Privacidad', path: '/privacy' },
    { label: 'Términos de Servicio', path: '/terms' },
    { label: 'Mapa del Sitio', path: '/sitemap' },
  ];
}
