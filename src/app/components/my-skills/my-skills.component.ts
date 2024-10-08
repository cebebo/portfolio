import { Component, inject } from '@angular/core';
import { SkillIconsComponent } from './skill-icons/skill-icons.component';
import { Skillsdataservice } from './skill-icons/skillsdata.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [SkillIconsComponent, CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
}) 
export class MySkillsComponent {

  skillsDataList = inject(Skillsdataservice);

changeLang = inject(LanguageService);

  contentText = [
    {
      eng: 'My skills',
      ger: 'Fähigkeiten'
    },
    {
      eng: 'I have gained experience in building projects with different frontend technologies and concepts.',
      ger: 'Ich habe Erfahrungen beim Aufbau von Projekten mit unterschiedlichen Frontend-Technologien und -Konzepten gesammelt.'
    },
    {
      eng: "Looking for another skill?",
      ger: 'Suchen Sie weitere Fähigkeiten?'
    },
    {
      eng: "Feel free to contact me. I look forward to expanding on my previous knowledge.",
      ger: 'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.'
    },
    {
      eng: "Get in touch",
      ger: 'Kontakt aufnehmen'
    }
  ];

}
