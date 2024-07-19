import {Component, input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-footer-button',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    IconComponent
  ],
  templateUrl: './footer-button.component.html',
  styleUrl: './footer-button.component.scss'
})
export class FooterButtonComponent {
  readonly icon = input.required()
  readonly label = input.required()
  readonly href = input.required()
}
