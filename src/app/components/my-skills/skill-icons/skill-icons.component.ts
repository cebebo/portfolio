import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-skill-icons',
  standalone: true,
  imports: [],
  templateUrl: './skill-icons.component.html',
  styleUrl: './skill-icons.component.scss'
})
export class SkillIconsComponent {

  @Input() skillsLab =
    {
      name: "HTML",
      img: "icon-html.png"
    };

  changeLang = inject(LanguageService);

  popup = false;

  checkAndExecute(name: string, n: number) {
    if (name === 'Currently learning') {
      if (n == 1) {
        this.popup = true;
      } else {
        this.popup = false;
      }
    }
  }

}
