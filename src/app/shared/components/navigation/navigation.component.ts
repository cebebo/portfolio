import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  changeLang = inject(LanguageService);

  
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

  changeLanguage() {
    if (this.changeLang.language == 'eng') {
      this.changeLang.language = 'ger';
    } else { this.changeLang.language = 'eng' };
  }

  openMenu() {
    this.mobileMenu = true;
  }

  closeMenu() {
    this.mobileMenu = false;
  }

}
