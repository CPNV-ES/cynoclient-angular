import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const dogsUrl = 'http://localhost:3000/dogs';

@Injectable({
  providedIn: 'root'
})

export class DogsService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<[]> {
    return this.http.get<[]>(dogsUrl);
  }

  getDog(id: number): Observable<any> {
    return this.http.get(`${dogsUrl}/${id}`)
  }

  create(data: any): Observable<any> {
    return this.http.post(dogsUrl, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${dogsUrl}/${id}`, data);
  }

  findByName(name: string): Observable<any> {
    return this.http.get(`${dogsUrl}?title=${name}`);
  }

  delete(id: number) : Observable<any> {
    return this.http.delete(`${dogsUrl}/${id}`);
  }
}
