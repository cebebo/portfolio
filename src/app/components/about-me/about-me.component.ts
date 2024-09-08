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
      eng: 'Hi, my name is Christian and I am a front-end developer. I am from a small village named Bornich in southwest of Germany. Developing programs, websites and other projects has been my great passion for over 25 years. Through professional training as a front-end developer, I have acquired the necessary skills to program web presentations and complex business and gaming applications.',
      ger: 'Hallo, ich heiße Christian und ich bin Frontend-Entwickler. Ich komme aus dem südwestdeutschen Loreley-Dorf Bornich, gelegen zwischen Koblenz und Wiesbaden. Das Entwickeln von Programmen, Webseiten und anderen Projekten ist seit über 25 Jahren meine große Leidenschaft. Durch eine professionelle Ausbildung zum Frontend-Entwickler habe ich mir entsprechende Fähigkeiten erarbeitet, um Webpräsentationen und komplexe Business- und Spieleanwendungen zu programmieren. '
    },
    {
      eng: "Since I am flexible with regard to my work environment, I can work effectively both on-site in the Rhein-Lahn district and the surrounding area, as well as preferably remotely beyond that.",
      ger: 'Da ich hinsichtlich meiner Arbeitsumgebung flexibel bin, kann ich sowohl vor Ort im Rhein-Lahn-Kreis und Umgebung effektiv arbeiten, als auch bevorzugt remote darüber hinaus.'
    },
    {
      eng: "In addition to the skills I have learned, I also like to try out other areas of IT development and am very interested in expanding my knowledge and experience in this area. I am currently training in the backend area so that I can work as a full-stack developer in the future.",
      ger: 'Neben meinen erlernten Fähigkeiten probiere ich mich gerne auch in anderen Bereichen der IT-Entwicklung aus und bin sehr daran interessiert mein Wissen und meine Erfahrungen in diesem Bereich zu erweitern. Aktuell bilde ich mich im Backend-Bereich weiter, um künftig als Full-Stack-Entwickler arbeiten zu können.'
    },
    {
      eng: "In my years of teaching work, I have been able to demonstrate the ability to carefully develop simple and challenging projects and to implement them in a solution-oriented manner, either alone or in a team. I am keen to continue to use these experiences and talents in the development of your projects in order to achieve the set goals together.",
      ger: 'Die Fähigkeiten simple, als auch anspruchsvolle Projekte alleine oder in einem Team durchdacht auszuarbeiten und lösungorientiert umzusetzen konnte ich in meiner jahrelangen pädagogischen Arbeit unter Beweis stellen. Es liegt mir viel daran diese Erfahrungen und Talente auch weiterhin in der Entwicklung Ihrer Projekte einzusetzen, um gemeinsam die gesetzten Ziele zu erreichen.'
    }
  ];

}
