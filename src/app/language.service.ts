import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language:any = localStorage.getItem('language');
  backupLink:string | null = localStorage.getItem('backupLink');

  constructor() {
    
   }

  
changeLink(val:string) {
  this.backupLink = val;
  localStorage.setItem('backupLink', val);
}

}
