import { Component } from '@angular/core';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { MySkillsComponent } from '../components/my-skills/my-skills.component';
import { HeroComponent } from '../components/hero/hero.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboutMeComponent, MySkillsComponent, HeroComponent, PortfolioComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  
}
