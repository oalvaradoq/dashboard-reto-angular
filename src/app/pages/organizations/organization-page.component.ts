import { Component, signal, inject } from '@angular/core';
import { DivisionTableComponent } from '../../components/division-table/division-table.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { Router, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
interface OrganizationTabs {
  id: string;
  label: string;
  route: string;
}
@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.scss'],
  imports: [RouterOutlet, NzTabsModule, NzIconModule, NzButtonModule],
  standalone: true,
})
export class OrganizationPageComponent {
  private router = inject(Router);
  tabs = signal<OrganizationTabs[]>([
    { id: '1', label: 'Divisiones', route: 'divisions' },
    { id: '2', label: 'Colaboradores', route: 'collaborators' },
  ]);
  selectedTab = signal(0);

  onTabChange(index: number): void {
    this.selectedTab.set(index);
    const selectedTab = this.tabs()[index];
    if (selectedTab) {
      this.router.navigate(['/organizations', selectedTab.route]);
    }
  }
}
