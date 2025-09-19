import { inject, Injectable } from '@angular/core';
import { ApiService, EapiMethod } from '../modules/api';
import { Division } from '../mockups/organizations/organization.mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrganizationsService {
  private api = inject(ApiService);

  getDivisions(): Observable<Division[]> {
    return this.api.request('divisions', EapiMethod.GET) as Observable<Division[]>;
  }
}
