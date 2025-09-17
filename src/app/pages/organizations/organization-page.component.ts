import { Component } from '@angular/core';
import { DivisionTableComponent } from '../../components/division-table/division-table.component';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  imports: [DivisionTableComponent],
  standalone: true,
})
export class OrganizationPageComponent {}
