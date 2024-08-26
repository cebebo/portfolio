import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-skill-icons',
  standalone: true,
  imports: [],
  templateUrl: './skill-icons.component.html',
  styleUrl: './skill-icons.component.scss'
})
export class SkillIconsComponent {

  @Input()skillsLab = [
    {
      name: "HTML",
      img: "icon-html.png"
    },
    {
      name: "CSS",
      img: "icon-css.png"
    }
  ];



}
