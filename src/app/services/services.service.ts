import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from './service';
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ServicesService {

  // ServiceUrl = `http://localhost:3000/services/${id}`;

  constructor(private http: HttpClient) { }

  getService(term: string): Observable<Service[]> {
    term = term.trim();
    const options = term ? { params: new HttpParams().set('id', term) } : {};
    return this.http.get<Service[]>(`http://localhost:3000/services/${term}`, options);
  }
}
