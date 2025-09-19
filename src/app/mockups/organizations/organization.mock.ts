export interface Division {
  id: number;
  division: string;
  divisionUp: string;
  collaborators: number;
  nivel: number;
  subdivisions: number;
  ambassadors: string | null;
}

export const DIVISIONS_MOCK: Division[] = [
  {
    id: 1,
    division: 'Tecnología',
    divisionUp: 'Dirección General',
    collaborators: 45,
    nivel: 1,
    subdivisions: 3,
    ambassadors: 'Carlos Mendoza',
  },
  {
    id: 2,
    division: 'Desarrollo Frontend',
    divisionUp: 'Tecnología',
    collaborators: 12,
    nivel: 2,
    subdivisions: 2,
    ambassadors: 'Ana García',
  },
  {
    id: 3,
    division: 'Desarrollo Backend',
    divisionUp: 'Tecnología',
    collaborators: 18,
    nivel: 2,
    subdivisions: 1,
    ambassadors: 'Miguel Torres',
  },
];
