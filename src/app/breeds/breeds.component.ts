import { Component, OnInit } from '@angular/core';
import {BreedsService} from './breeds.service';
import {Breed} from './breed';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  providers: [BreedsService],
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  
  breeds: MatTableDataSource<Breed>;
  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.getBreeds();
  }

  displayedColumns: string[] = ['breed'];

  applyFilter(filterValue: string) {

    filterValue = filterValue.trim().toLowerCase();  // Remove whitespace // MatTableDataSource defaults to lowercase matches
    this.breeds.filter = filterValue;
  }
  
  getBreeds(): void {
    this.breedsService.getBreeds()
      .subscribe(breeds => {
        this.breeds = new MatTableDataSource(breeds);

        this.breeds.filterPredicate = function(data:Breed, filter: string): boolean {
          return data.noun.toLowerCase().includes(filter);
        }
      });
  }
}
