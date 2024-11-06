import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../../../language.service';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  changeLang = inject(LanguageService);


}
