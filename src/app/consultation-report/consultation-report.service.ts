import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Consultation} from './consultation';

@Injectable()
export class ConsultationReportService {
  ConsultationsUrl = 'http://localhost:3000/services';

  constructor(private http: HttpClient) { }

  getServices(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(this.ConsultationsUrl);
  }
}
