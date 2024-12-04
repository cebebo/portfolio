import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, VideoComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  changeLang = inject(LanguageService);

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
