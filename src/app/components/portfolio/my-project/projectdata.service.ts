import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Projectdataservice {
 
  constructor() { }

  projectList = [
    {
      id: 0,
      name: "Join",
      img: "app-join.jpg",
      preview: "preview-JOIN.gif",
      info: "JavaScript | HTML | CSS | Git",
      description: ["Usefull Task manager inspired by the Kanban System. Assign unsers and categories to create, organize and manage their tasks using drag and drop functions.", "Nützlicher Task-Manager, inspiriert vom Kanban-System. Legen Sie Benutzer und Kategorien an, um Aufgaben zuzuweisen und via Drag & Drop-Funktionen zu organisieren und zu verwalten."],
      link: "http://www.amazon.de",
      github: "http://www.ebay.de"
    },
    {
      id: 1,
      name: "Pokédex",
      img: "app-pokedex.jpg",
      preview: "preview-PDEX.gif",
      info: "JavaScript | HTML | CSS | Api",
      description: ["Based on the PokéAPI a simple library that provides, compares and catalogues pokémon information.", "Eine übersichtliche Bibliothek, basierend auf der PokéAPIdie, die Pokémon-Informationen bereitstellt, vergleicht und katalogisiert."],
      link: "http://www.google.de",
      github: "http://www.yahoo.com"
    },
    {
      id: 2,
      name: "El Pollo Loco",
      img: "app-elpolloloco.jpg",
      preview: "preview-EPL.gif",
      info: "JavaScript | HTML | CSS",
      description: ["A simple and funny Jump-and-Run game based on a object-oriented approach. Help Pepe to collect the coins, bottles an beans to fight successfully against the enemy chicken.", "Ein einfaches und unterhaltsames Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen, Flaschen und Bohnen einzusammeln, um erfolgreich gegen die feindlichen Hühner zu kämpfen."],
      link: "http://www.instagram.com",
      github: "http://www.facebook.com"
    }
]

}