import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { LanguageService } from '../../../language.service';
import { ScrollService } from '../../../scroll.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  changeLang = inject(LanguageService);
  scroll = inject(ScrollService);
  
  language = 'eng';
  mobileMenu = false;

  menuText = [
    {
      eng: 'About me',
      ger: 'Über mich'
    },
    {
      eng: 'Skills',
      ger: 'Fähigkeiten'
    }
  ];

  constructor(private renderer: Renderer2) {}

  changeLanguage() {
    if (this.changeLang.language == 'eng') {
      this.changeLang.language = 'ger';
    } else { this.changeLang.language = 'eng' };
  }

  openMenu() {
    this.mobileMenu = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    document.body.style.overflow = 'hidden'
  }

  closeMenu() {
    this.mobileMenu = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }

}
