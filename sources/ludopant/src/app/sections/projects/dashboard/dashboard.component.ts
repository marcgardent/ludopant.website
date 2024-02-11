import {Component, Input} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {DashboardModel} from "./models";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  @Input() dashboard : DashboardModel = {
    title : "title",
    cover : "cover.img",
    status : "status...",
    details : [
        { name : "todo", progress : "50%"},
      ]
  };
}
