import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Disease} from './diseases';

@Injectable()
export class DiseasesService {
  diseasesUrl = 'http://localhost:3000/diseases';

  
  constructor(private http: HttpClient) { }

  getDiseases(): Observable<Disease[]> {
    return this.http.get<Disease[]>(this.diseasesUrl);
  }
}
