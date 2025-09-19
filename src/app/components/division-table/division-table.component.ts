import { Component, input, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Division } from '../../mockups/organizations/organization.mock';
import { NzIconModule } from 'ng-zorro-antd/icon';

interface FilterOption {
  text: string;
  value: string | number;
}

@Component({
  selector: 'app-division-table',
  imports: [NzTableModule, NzIconModule],
  templateUrl: './division-table.component.html',
  styleUrls: ['./division-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DivisionTableComponent {
  divisions = input<Division[]>([]);
  checked = signal(false);
  setOfCheckedId = new Set<number>();
  visible = signal(true);

  divisionFilters = computed<FilterOption[]>(() => {
    const uniqueDivisions = [...new Set(this.divisions().map((d) => d.division))];
    return uniqueDivisions.map((division) => ({ text: division, value: division }));
  });

  divisionUpFilters = computed<FilterOption[]>(() => {
    const uniqueDivisionUps = [...new Set(this.divisions().map((d) => d.divisionUp))];
    return uniqueDivisionUps.map((divisionUp) => ({ text: divisionUp, value: divisionUp }));
  });

  nivelFilters = computed<FilterOption[]>(() => {
    const uniqueNiveles = [...new Set(this.divisions().map((d) => d.nivel))];
    return uniqueNiveles
      .sort((a, b) => a - b)
      .map((nivel) => ({ text: `Nivel ${nivel}`, value: nivel }));
  });

  // Sort functions
  sortByDivision = (a: Division, b: Division): number => a.division.localeCompare(b.division);

  sortByDivisionUp = (a: Division, b: Division): number => a.divisionUp.localeCompare(b.divisionUp);

  sortByCollaborators = (a: Division, b: Division): number => a.collaborators - b.collaborators;

  sortByNivel = (a: Division, b: Division): number => a.nivel - b.nivel;

  sortBySubdivisions = (a: Division, b: Division): number => a.subdivisions - b.subdivisions;

  sortByAmbassadors = (a: Division, b: Division): number => {
    const aValue = a.ambassadors || '';
    const bValue = b.ambassadors || '';
    return aValue.localeCompare(bValue);
  };

  // Filter functions
  filterByDivision = (list: string[], item: Division): boolean => {
    return list.length === 0 || list.includes(item.division);
  };

  filterByDivisionUp = (list: string[], item: Division): boolean => {
    return list.length === 0 || list.includes(item.divisionUp);
  };

  filterByNivel = (list: number[], item: Division): boolean => {
    return list.length === 0 || list.includes(item.nivel);
  };
}
