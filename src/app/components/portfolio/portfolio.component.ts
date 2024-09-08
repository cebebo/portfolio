import { Component, inject, Input } from '@angular/core';
import { MyProjectComponent } from './my-project/my-project.component';
import { Projectdataservice } from './my-project/projectdata.service';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MyProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projectDataList = inject(Projectdataservice);

  activeID = 0;

  activeApp = {
    name: this.projectDataList.projectList[this.activeID].name,
    preview: this.projectDataList.projectList[this.activeID].preview,
    info: this.projectDataList.projectList[this.activeID].info,
    description: this.projectDataList.projectList[this.activeID].description,
    link: this.projectDataList.projectList[this.activeID].link,
    github: this.projectDataList.projectList[this.activeID].github
  }

  updatePreview(id:number) {
    console.log('nummer' + id);
    this.activeID = id;
    this.activeApp = {
      name: this.projectDataList.projectList[id].name,
      preview: this.projectDataList.projectList[id].preview,
      info: this.projectDataList.projectList[id].info,
      description: this.projectDataList.projectList[id].description,
      link: this.projectDataList.projectList[id].link,
      github: this.projectDataList.projectList[id].github
    }
  }

changeLang = inject(LanguageService);

  contentText = [
    {
      eng: 'These are some of my self-programmed applications and a useful preview of my work. Feel free to take a closer look at the details of my projects.',
      ger: 'Dies sind einige meiner selbst programmierten Anwendungen und eine nützliche Vorschau meiner Arbeit. Schauen Sie sich die Details meiner Projekte gerne genauer an.'
    }
  ];

}
