import {Component, Input} from '@angular/core';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardModel} from "./dashboard/models";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DashboardComponent,
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


  @Input() projects : Array<DashboardModel> = new Array<DashboardModel>();

}
