import { Component, input, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Division } from '../../mockups/organizations/organization.mock';

interface FilterOption {
  text: string;
  value: string | number;
}

@Component({
  selector: 'app-division-table',
  imports: [
    NzTableModule,
    NzIconModule,
    NzDropDownModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    FormsModule,
  ],
  templateUrl: './division-table.component.html',
  styleUrls: ['./division-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DivisionTableComponent {
  divisions = input<Division[]>([]);
  checked = signal(false);
  setOfCheckedId = new Set<number>();

  sortByDivision = (a: Division, b: Division) => a.division.localeCompare(b.division);
  sortByDivisionUp = (a: Division, b: Division) => a.divisionUp.localeCompare(b.divisionUp);
  sortByCollaborators = (a: Division, b: Division) => a.collaborators - b.collaborators;
  sortByNivel = (a: Division, b: Division) => a.nivel - b.nivel;
  sortBySubdivisions = (a: Division, b: Division) => a.subdivisions - b.subdivisions;
  sortByAmbassadors = (a: Division, b: Division) =>
    (a.ambassadors || '').localeCompare(b.ambassadors || '');

  divisionUpFilters = computed<FilterOption[]>(() => {
    const set = new Set(this.divisions().map((d) => d.divisionUp));
    return [...set].map((v) => ({ text: v, value: v }));
  });
  nivelFilters = computed<FilterOption[]>(() => {
    const set = new Set(this.divisions().map((d) => d.nivel));
    return [...set].sort((a, b) => a - b).map((v) => ({ text: `Nivel ${v}`, value: v }));
  });

  divisionSearchTerm = signal('');
  selectedDivisionsApplied = signal<Set<string>>(new Set());
  selectedDivisionsDraft = signal<Set<string>>(new Set());
  divisionFilterOpen = signal(false);

  divisionOptions = computed<string[]>(() => {
    const set = new Set(this.divisions().map((d) => d.division));
    return [...set].sort((a, b) => a.localeCompare(b));
  });
  filteredDivisionOptions = computed<string[]>(() => {
    const term = this.divisionSearchTerm().toLowerCase();
    return this.divisionOptions().filter((opt) => opt.toLowerCase().includes(term));
  });

  filteredDivisions = computed<Division[]>(() => {
    const applied = this.selectedDivisionsApplied();
    if (applied.size === 0) return this.divisions();
    return this.divisions().filter((d) => applied.has(d.division));
  });

  filterByDivisionUp = (list: string[], item: Division) =>
    list.length === 0 || list.includes(item.divisionUp);
  filterByNivel = (list: number[], item: Division) =>
    list.length === 0 || list.includes(item.nivel);

  onDivisionFilterVisibleChange(visible: boolean) {
    this.divisionFilterOpen.set(visible);
    if (visible) {
      this.selectedDivisionsDraft.set(new Set(this.selectedDivisionsApplied()));
    }
  }

  toggleDivisionOption(value: string) {
    const next = new Set(this.selectedDivisionsDraft());
    next.has(value) ? next.delete(value) : next.add(value);
    this.selectedDivisionsDraft.set(next);
  }
  clearDivisionFilter() {
    this.selectedDivisionsDraft.set(new Set());
    this.divisionSearchTerm.set('');
  }
  applyDivisionFilter() {
    this.selectedDivisionsApplied.set(new Set(this.selectedDivisionsDraft()));
    this.divisionFilterOpen.set(false);
  }
  isDivisionChecked(value: string) {
    return this.selectedDivisionsDraft().has(value);
  }
}
