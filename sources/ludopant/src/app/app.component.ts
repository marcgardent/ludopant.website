import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SocialnetworkComponent} from "./sections/socialnetwork/socialnetwork.component";
import {ProjectsComponent} from "./sections/projects/projects.component";
import {DashboardModel} from "./sections/projects/dashboard/models";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialnetworkComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ludopant';

  projects : Array<DashboardModel> = [
    {
      title : "Les Toits de Paris : Une Rencontre En Cache Une Autre [CJS-S1E1]",
      cover : "assets/img/items/celeste_et_jules-les_toits_de_paris-e1s1.webp",
      status : "édition en accès anticipé disponible !",
      details : [
        { name : "Scénographies", progress : "100%"},
        { name : "Storyboards", progress : "100%"},
        { name : "Crayonnés", progress : "100%"},
        { name : "Couleurs", progress : "100%"},
        { name : "Finitions", progress : "100%"},
      ]
    },
    {
      title : "Jardins Suspendus : Une Porte Vers l'Espace [CJS-S1E2]",
      cover : "assets/img/items/CJS-S1E2.webp",
      status : "En cours de conception",
      details : [
        { name : "Scénographies", progress : "80%"},
        { name : "Storyboards", progress : "20%"},
        { name : "Crayonnés", progress : "10%"},
        { name : "Couleurs", progress : "0%"},
        { name : "Finitions", progress : "0%"},
      ]
    },
    {
      title : "Ville Fantôme : la clef de nos espoirs [CJS-S1E3]",
      cover : "assets/img/items/CJS-S1E3.webp",
      status : "A Planifier",
      details : [
        { name : "Scénographies", progress : "0%"},
        { name : "Storyboards", progress : "0%"},
        { name : "Crayonnés", progress : "0%"},
        { name : "Couleurs", progress : "0%"},
        { name : "Finitions", progress : "0%"},
      ]
    },
    {
      title : "Odyssey : Le Salaire de la peur [CJS-S1E4]",
      cover : "assets/img/items/CJS-S1E4.webp",
      status : "A Planifier",
      details : [
        { name : "Scénographies", progress : "0%"},
        { name : "Storyboards", progress : "0%"},
        { name : "Crayonnés", progress : "0%"},
        { name : "Couleurs", progress : "0%"},
        { name : "Finitions", progress : "0%"},
      ]
    },
    {
      title : "La Résistance [CJS-S1E5]",
      cover : "assets/img/items/CJS-S1E5.webp",
      status : "A Planifier",
      details : [
        { name : "Scénographies", progress : "0%"},
        { name : "Storyboards", progress : "0%"},
        { name : "Crayonnés", progress : "0%"},
        { name : "Couleurs", progress : "0%"},
        { name : "Finitions", progress : "0%"},
      ]
    },
  ]
}
