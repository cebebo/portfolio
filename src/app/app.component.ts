import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { MySkillsComponent } from "./components/my-skills/my-skills.component";
import { HeroComponent } from "./components/hero/hero.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, AboutMeComponent, MySkillsComponent, HeroComponent, PortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  language = 'eng';

  currentLanguage(lang:string) {
    this.language = lang;
  }
}

