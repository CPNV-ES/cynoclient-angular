import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Breed} from './breed';

@Injectable()
export class BreedsService {
  breedsUrl = 'http://localhost:3000/breeds';

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.breedsUrl);
  }
}
