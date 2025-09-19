import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export enum EapiMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3000/api';
  private headers = {};
  constructor(public client: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  request(url: string = '', method: EapiMethod, body = {}) {
    const apiUrl = `${this.url}/${url}`;
    return this.client.request(method, apiUrl, { body, headers: this.headers });
  }
}
