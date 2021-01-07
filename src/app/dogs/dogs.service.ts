import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DogsService {

  dogsUrl = 'http://localhost:3000/dogs';

  constructor(private http: HttpClient) { }

  getDogs(): Observable<[]> {
    return this.http.get<[]>(this.dogsUrl);
  }
}
