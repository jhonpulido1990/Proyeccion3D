import { Component } from '@angular/core';
import { SocialLink } from '../../../core/models/interfaces/SocialLink.interface';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss'
})
export class SocialLinks {
  socialLinks: SocialLink[] = [
    { name: 'facebook', url: 'https://facebook.com', icon: '#1877f2' },
    { name: 'twitter', url: 'https://twitter.com', icon: '#1da1f2' },
    { name: 'instagram', url: 'https://instagram.com', icon: '#f09433' },
    { name: 'linkedin', url: 'https://linkedin.com', icon: '#0077b5' },
    { name: 'youtube', url: 'https://youtube.com', icon: '#ff0000' }
  ];
}
