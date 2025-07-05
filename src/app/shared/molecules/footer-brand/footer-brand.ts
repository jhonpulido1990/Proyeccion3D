import { Component, Input } from '@angular/core';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-footer-brand',
  imports: [SocialLinks],
  templateUrl: './footer-brand.html',
  styleUrl: './footer-brand.scss'
})
export class FooterBrand {
  @Input() title: string = 'Proyección3DBIC';
  @Input() description: string = '';
}
