import { Component } from '@angular/core';
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DashboardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
