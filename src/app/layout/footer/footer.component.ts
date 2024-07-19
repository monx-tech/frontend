import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {FooterButtonComponent} from "../components/footer-button/footer-button.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbar,
    FooterButtonComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
