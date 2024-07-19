import {Component, input, output} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-toggle-sidebar-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './toggle-sidebar-button.component.html',
  styleUrl: './toggle-sidebar-button.component.scss'
})
export class ToggleSidebarButtonComponent {
  readonly iconClose = input<string>('close')
  readonly icon = input.required<string>()
  readonly isOpen = input.required<boolean>()

  readonly onButtonClick = output()
}
