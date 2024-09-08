import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

changeLang = inject(LanguageService);

}
