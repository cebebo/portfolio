import { Component, inject } from '@angular/core';
import { SkillIconsComponent } from './skill-icons/skill-icons.component';
import { Skillsdataservice } from './skill-icons/skillsdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [SkillIconsComponent, CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  // skillsDataList = inject(Skillsdataservice);
  skillsLabList = [
    {
      name: "HTML",
      img: "icon-html.png"
    },
    {
      name: "CSS",
      img: "icon-css.png"
    },
    {
      name: "JavaScript",
      img: "icon-js.png"
    },
    {
      name: "TypeScript",
      img: "icon-ts.png"
    },
    {
      name: "Angular",
      img: "icon-angular.png"
    },
    {
      name: "Firebase",
      img: "icon-firebase.png"
    },
    {
      name: "GIT",
      img: "icon-git.png"
    },
    {
      name: "Rest-Api",
      img: "icon-api.png"
    },
    {
      name: "Scrum",
      img: "icon-scrum.png"
    },
    {
      name: "Material Design",
      img: "icon-matdes.png"
    },
    {
      name: "Continually learning",
      img: "icon-learn.png"
    }
  ];

}
