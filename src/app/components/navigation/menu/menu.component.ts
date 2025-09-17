import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-menu',
  imports: [NzDividerModule, RouterLink, RouterLinkActive, NzDropDownModule, NzIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppMenu {
  private readonly dropdownStates = signal<Record<string, boolean>>({
    modulos: false,
    seguimiento: false,
  });

  onDropdownVisibleChange(dropdownName: string, visible: boolean): void {
    this.dropdownStates.update((states) => ({
      ...states,
      [dropdownName]: visible,
    }));
  }
  isDropdownOpen(dropdownName: string): boolean {
    return this.dropdownStates()[dropdownName];
  }
}
