import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Skillsdataservice {

  constructor() { }

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