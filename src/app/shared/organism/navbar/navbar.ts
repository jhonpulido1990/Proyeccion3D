import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandLogo } from "../../molecules/brand-logo/brand-logo";
import { NavigationMenu } from "../../molecules/navigation-menu/navigation-menu";
import { MobileToggle } from "../../molecules/mobile-toggle/mobile-toggle";
import { MobileMenu } from "../../molecules/mobile-menu/mobile-menu";
import { NavigationLink } from '../../../core/models/interfaces/NavigationLink.inteface';

@Component({
  selector: 'app-navbar',
  imports: [ CommonModule, BrandLogo, NavigationMenu, MobileToggle, MobileMenu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isMobileMenuOpen = false;

  navigationLinks: NavigationLink[] = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Acerca de' },
    { path: '/service', label: 'Servicios' },
    { path: '/project', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
