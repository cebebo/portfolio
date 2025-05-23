import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

changeLang = inject(LanguageService);

  contentText = [
    {
      eng: 'About me',
      ger: 'Über mich'
    },
    {
      eng: 'My name is Christian and I am a front-end developer. I am from a small village named Bornich in southwest Germany. Developing web-apps and websites has been my passion for over 25 years. Through professional training as a front-end developer, I have acquired the necessary skills to program web presentations and complex business and gaming applications.',
      ger: 'Mein Name ist Christian und ich bin Frontend-Entwickler. Ich komme aus dem kleinen Loreley-Dorf Bornich (RLP), zwischen Koblenz und Wiesbaden. Das Entwickeln von Web-Apps und Webseiten ist seit über 25 Jahren meine große Leidenschaft. Durch eine professionelle Ausbildung zum Frontend-Entwickler habe ich mir entsprechende Fähigkeiten erarbeitet, um Webpräsentationen und komplexe Business- und Spielanwendungen zu programmieren. '
    },
    {
      eng: "Since I am flexible about my work environment, I can work effectively both on-site in the Rhein-Lahn district and the surrounding area, as well as preferably remotely beyond that.",
      ger: 'Da ich hinsichtlich meiner Arbeitsumgebung flexibel bin, kann ich sowohl vor Ort im Rhein-Lahn-Kreis und Umgebung effektiv arbeiten, als auch bevorzugt remote darüber hinaus.'
    },
    {
      eng: "I also like to try out other areas of IT development. I am very interested in expanding my knowledge and experience. I am currently training in the backend area to work as a full-stack developer in the future.",
      ger: 'Ich probiere mich gerne auch in anderen Bereichen der IT-Entwicklung aus. Ich möchte mein Wissen und meine Erfahrungen in neuen Bereichen gerne erweitern. Aktuell bilde ich mich in der Backend-Programmierung weiter, um künftig als Full-Stack-Entwickler arbeiten zu können.'
    },
    {
      eng: "In my years of teaching work, I have been able to demonstrate the ability to develop simple and challenging projects carefully and to implement them in a solution-oriented manner, either alone or in a team. I am keen to continue to use these experiences and talents in the development of your projects to achieve the set goals together.",
      ger: 'Simple, als auch anspruchsvolle Projekte, alleine oder in einem Team zu planen, auszuarbeiten und umzusetzen, konnte ich in meiner jahrelangen pädagogischen Arbeit unter Beweis stellen. Ich freue mich diese Erfahrungen und Talente in der Entwicklung Ihrer Projekte einzusetzen, um gemeinsam die gesetzten Ziele zu erreichen.'
    }
  ];

}
