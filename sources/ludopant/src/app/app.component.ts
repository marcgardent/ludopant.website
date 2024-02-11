import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SocialnetworkComponent} from "./sections/socialnetwork/socialnetwork.component";
import {ProjectsComponent} from "./sections/projects/projects.component";
import {DashboardModel} from "./sections/projects/dashboard/models";
import {data_projects} from "../data/data_projects";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialnetworkComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ludopant';
  projects : Array<DashboardModel> = data_projects;
}
