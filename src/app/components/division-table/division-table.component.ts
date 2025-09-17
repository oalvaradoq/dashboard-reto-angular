import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-division-table',
  imports: [NzTableModule],
  templateUrl: './division-table.component.html',
  styleUrls: ['./division-table.component.scss'],
  standalone: true,
})
export class DivisionTableComponent {}
