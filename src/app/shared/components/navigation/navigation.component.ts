import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { LanguageService } from '../../../language.service';
import { ScrollService } from '../../../scroll.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
    if (localStorage.getItem('language') == 'eng') {
      localStorage.setItem('language', 'ger');
      this.changeLang.language = 'ger';
    } else { 
      localStorage.setItem('language', 'eng') 
      this.changeLang.language = 'eng';
    };
  }

  openMenu() {
    this.mobileMenu = true;
    document.documentElement.style.overflow = 'hidden';
  }

  closeMenu() {
    this.mobileMenu = false;
    document.documentElement.style.overflow = 'auto';
  }

}
