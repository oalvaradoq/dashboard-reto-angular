import { Component } from '@angular/core';
import { DivisionTableComponent } from '../../../components/division-table/division-table.component';

@Component({
  selector: 'app-divisions',
  imports: [DivisionTableComponent],
  templateUrl: './divisions.component.html',
  styleUrl: './divisions.component.scss',
})
export class DivisionsComponent {}
