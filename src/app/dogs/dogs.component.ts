import { DogsService } from './dogs.service';
import { Component, OnInit } from '@angular/core';

export interface Dogs {
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
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})


export class DogsComponent implements OnInit {

  /* Mat Table Columns
  displayedColumns: string[] = ['id', 'noun', 'female', 'birthdate', 'sterilized', 'chemical', 'color', 'dead', 'idClient', 'idBreed', 'idCrossBreed', 'client']*/
  displayedColumns: string[] = ['noun', 'female', 'birthdate', 'sterilized', 'chemical', 'color', 'dead', 'idBreed', 'client']

  dogs: Dogs[] = []

  constructor( private dogsService: DogsService ) { }

  ngOnInit(): void {
    this.getDogs()
  }

  getDogs(): void {
    this.dogsService.getDogs()
      .subscribe(
        dogs => (this.dogs = dogs),
        err => console.log('HTTP Error', err)
      )
  }

  onRowClicked(item: Dogs){
    console.log(item.id)
  }
}
