import {Component, inject, OnInit} from '@angular/core';
import {LayoutService} from "../../layout/layout.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  layoutService = inject(LayoutService)

  ngOnInit(): void {
    this.layoutService.title.set("MonxTech")
  }
}
