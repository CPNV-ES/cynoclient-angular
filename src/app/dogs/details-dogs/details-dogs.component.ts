import { DogsService } from '../dogs.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Dog {
  id: number
  noun: string
  female: boolean
  birthdate: Date
  sterilized: boolean
  chemical: boolean
  color: string
  dead: boolean
  idClient: number
  idBreed: number
  idCrossBreed: number
}

@Component({
  selector: 'app-details-dogs',
  templateUrl: './details-dogs.component.html',
  styleUrls: ['./details-dogs.component.css']
})

export class DetailsDogsComponent implements OnInit {

  dog!: Dog;

  constructor(
    private dogsService: DogsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDog(this.route.snapshot.paramMap.get('id'));
  }

  getDog(id: any): void {
    this.dogsService.getDog(id)
      .subscribe(
        data => (this.dog = data as Dog),
        err => console.log('HTTP Error', err)
      )
  }

  updateDog(){

  }

  deleteDog(){

  }

  updatePublished(result: boolean){

  }

}
