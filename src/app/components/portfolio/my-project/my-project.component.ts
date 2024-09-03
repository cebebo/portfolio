import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-project.component.html',
  styleUrl: './my-project.component.scss'
})
export class MyProjectComponent {
  
  @Input()projectCollection = 
  {
    id: 0,
    name: "Join",
    img: "app-join.jpg",
    preview: "preview-JOIN.gif",
    info: "JavaScript | HTML | CSS | Git",
    description: ["Usefull Task manager inspired by the Kanban System. Assign unsers and categories to create, organize and manage their tasks using drag and drop functions.", "Nützlicher Task-Manager, inspiriert vom Kanban-System. Legen Sie Benutzer und Kategorien an, um Aufgaben zuzuweisen und via Drag & Drop-Funktionen zu organisieren und zu verwalten."],
    link: "http://www.amazon.de",
    github: "http://www.ebay.de"
  };

actId:number = 0;
colorActive:string = '#70E61C';

@Output()changedProject = new EventEmitter<number>();

  changeProject(id:number) {
    this.changedProject.emit(id);
    this.actId = id;
  }

}
