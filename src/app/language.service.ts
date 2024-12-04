import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language:any = localStorage.getItem('language');
  backupLink:boolean = true;

  constructor() {
    
   }

   popup = false;
   video = false;
  
changeLink(val:boolean) {
  this.backupLink = val;
}

}
