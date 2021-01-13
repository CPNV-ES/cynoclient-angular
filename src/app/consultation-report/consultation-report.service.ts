import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {consultation} from './consultation';

@Injectable()
export class ConsultationReportService {
  ConsultationsUrl = 'http://localhost:3000/services';

  constructor(private http: HttpClient) { }

  getServices(): Observable<consultation[]> {
    return this.http.get<consultation[]>(this.ConsultationsUrl);
  }
}
