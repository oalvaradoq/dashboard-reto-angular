import { Component, signal } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-actions-menu',
  imports: [NzDividerModule, RouterLinkActive, NzDropDownModule, NzIconModule, NzAvatarModule],
  templateUrl: './actions-menu.component.html',
  styleUrl: './actions-menu.component.scss',
})
export class AppActionsMenu {
  isDropdownOpen = signal(false);

  onDropdownVisibleChange(visible: boolean): void {
    this.isDropdownOpen.set(visible);
  }
}
