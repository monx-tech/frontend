import {computed, effect, inject, Injectable, signal} from '@angular/core';
import { DimensionsService } from './dimensions.service';

type MenuItem = {
  label: string
  icon: string
  routerLink: string
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  readonly dimensionsService = inject(DimensionsService)

  readonly title = signal('MonxTech')
  readonly menuItems = signal<MenuItem[]>([])
  readonly sidebarLeftOpen = signal(this.dimensionsService.isDesktop())
  readonly sidebarRightOpen = signal(false)
  readonly sidebarLeftIcon = signal('menu')
  readonly sidebarRightIcon = signal('person')
  readonly sidebarMode = computed(() => this.dimensionsService.isMobile() ? 'push' : 'side')

  onChangeDimensions = effect(() => {
    if (this.dimensionsService.isMobile()) {
      this.closeSidebars()
    }
  }, {
    allowSignalWrites: true
  })

  toggleSidebar() {
    this.sidebarLeftOpen.update((value) => !value)
  }

  toggleSidebarRight() {
    this.sidebarRightOpen.update((value) => !value)
  }

  closeSidebars() {
    this.sidebarLeftOpen.set(false)
    this.sidebarRightOpen.set(false)
  }


}
