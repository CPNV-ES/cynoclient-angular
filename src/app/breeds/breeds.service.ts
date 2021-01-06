import { Injectable } from '@angular/core';

@Injectable()
export class BreedsService {
  breedsUrl = 'localhost:3000/breeds';

  constructor() { }
}
