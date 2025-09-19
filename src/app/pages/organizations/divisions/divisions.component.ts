import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DivisionTableComponent } from '../../../components/division-table/division-table.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { OrganizationsService } from '../../../rest/organizations.service';
import { Division } from '../../../mockups/organizations/organization.mock';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-divisions',
  imports: [
    DivisionTableComponent,
    NzRadioModule,
    FormsModule,
    NzSelectModule,
    NzInputModule,
    NzIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './divisions.component.html',
  styleUrl: './divisions.component.scss',
})
export class DivisionsComponent {
  private organizationsService = inject(OrganizationsService);

  radioValue = signal<'list' | 'tree'>('list');
  resultData = signal<Division[]>([]);
  selectedColumn = signal<string>('');
  inputSearch = signal<string>('');

  filteredData = computed(() => {
    const data = this.resultData();
    const searchParam = this.inputSearch();
    const column = this.selectedColumn();
    if (!searchParam || !column) {
      return data;
    }
    return data.filter((division: Division) => {
      switch (column) {
        case 'División':
          return division.division?.toLowerCase().includes(searchParam.toLowerCase());
        case 'División Superior':
          return division.divisionUp?.toLowerCase().includes(searchParam.toLowerCase());
        case 'Colaboradores':
          return division.collaborators?.toString().includes(searchParam.toLowerCase());
        case 'Nivel':
          return division.nivel?.toString().includes(searchParam.toLowerCase());
        case 'Subdivisiones':
          return division.subdivisions?.toString().includes(searchParam.toLowerCase());
        case 'Embajadores':
          return division.ambassadors?.toString().includes(searchParam.toLowerCase());
        default:
          return true;
      }
    });
  });

  columnsOptions = signal<ColumnsTable[]>([
    { name: 'División' },
    { name: 'División Superior' },
    { name: 'Colaboradores' },
    { name: 'Nivel' },
    { name: 'Subdivisiones' },
    { name: 'Embajadores' },
  ]);

  ngOnInit(): void {
    this.getDivisions();
  }

  onRadioChange(value: 'list' | 'tree'): void {
    this.radioValue.set(value);
  }

  onColumnSelect(column: string): void {
    this.selectedColumn.set(column);
  }

  onInputSearch(value: string): void {
    this.inputSearch.set(value);
  }

  getDivisions(): void {
    this.organizationsService.getDivisions().subscribe((data) => {
      this.resultData.set(data);
    });
  }
}

export interface ColumnsTable {
  name: string;
}
