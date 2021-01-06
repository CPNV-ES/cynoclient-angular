import { Component, OnInit } from '@angular/core';
import {BreedsService} from './breeds.service';
import {Breed} from './breed';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  providers: [BreedsService],
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  breeds: Breed[];
  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.getBreeds();
  }

  getBreeds(): void {
    this.breedsService.getBreeds()
      .subscribe(breeds => (this.breeds = breeds));
  }
}
