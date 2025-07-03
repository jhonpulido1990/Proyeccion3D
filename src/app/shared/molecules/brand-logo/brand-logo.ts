import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-logo',
  imports: [RouterLink],
  templateUrl: './brand-logo.html',
  styleUrl: './brand-logo.scss'
})
export class BrandLogo {
  @Input() text: string = 'Portafolio';
  @Input() href: string = '/';
}
