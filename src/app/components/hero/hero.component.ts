import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

@Input() language = 'eng';

  contentText = [
    {
      eng: 'I am',
      ger: 'Ich bin'
    },
    {
      eng: 'FRONTEND DEVELOPER',
      ger: 'FRONTEND ENTWICKLER'
    },
    {
      eng: "Let's talk!",
      ger: 'Kontaktiere mich!'
    }
  ];

}
