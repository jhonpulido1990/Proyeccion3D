import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.html',
  styleUrl: './footer-contact.scss'
})
export class FooterContact {
  contactInfo = {
    title: 'Contáctanos',
    address: {
      street: 'Calle Innovación 123',
      suite: 'Suite 400',
      city: 'Ciudad de México, CP 12345'
    },
    phone: '+52 (55) 5555-0123',
    email: 'info@proyeccion3dbic.com'
  };
}
