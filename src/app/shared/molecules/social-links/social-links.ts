import { Component } from '@angular/core';
import { SocialLink } from '../../../core/models/interfaces/SocialLink.interface';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss'
})
export class SocialLinks {
  socialLinks: SocialLink[] = [
    { name: 'facebook', url: 'https://facebook.com', icon: 'facebook' },
    { name: 'twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'linkedin', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'youtube', url: 'https://youtube.com', icon: 'youtube' }
  ];
}
