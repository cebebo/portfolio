import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  language = 'eng';

  @Output() changeLang = new EventEmitter<string>();

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
    if (this.language == 'eng') {
      this.language = 'ger';
    } else { this.language = 'eng' };
    this.changeLang.emit(this.language);
  }

}
