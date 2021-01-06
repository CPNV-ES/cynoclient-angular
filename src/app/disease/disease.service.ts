import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Disease} from './disease';

@Injectable({
  providedIn: 'root'
})
export class DiseasesService {
  DiseasesUrl = 'http://localhost:3000/diseases';

  
  constructor(private http: HttpClient) { }

  getDiseases(): Observable<Disease[]> {
    return this.http.get<Disease[]>(this.DiseasesUrl);
  }
}
