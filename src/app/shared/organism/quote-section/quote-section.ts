import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quote-section',
  imports: [],
  templateUrl: './quote-section.html',
  styleUrl: './quote-section.scss'
})
export class QuoteSection {
  quote = input<string>('"En un país de manufactura, ser los arquitectos del futuro digital es nuestro legado."');
  author = input<string>('Andres Mosca, CEO y Fundador');
  backgroundImage = input<string>('assets/images/Andres-Mosca.png');
}
