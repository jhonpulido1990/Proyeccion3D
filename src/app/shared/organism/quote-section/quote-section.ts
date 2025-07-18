import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quote-section',
  imports: [],
  templateUrl: './quote-section.html',
  styleUrl: './quote-section.scss'
})
export class QuoteSection {
  quote = input<string>('"La impresión 3D no es solo una tecnología, es una revolución en la forma en que diseñamos, creamos y fabricamos."');
  author = input<string>('Sara Jiménez, CEO y Fundadora');
  backgroundImage = input<string>('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop');
}
