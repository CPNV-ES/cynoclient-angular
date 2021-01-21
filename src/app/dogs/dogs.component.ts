import { DogsService } from './dogs.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  dataSource = new MatTableDataSource<Dogs>(this.dogs);

  constructor( private dogsService: DogsService, private router: Router ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getDogs();
      setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  getDogs(): void {
    this.dogsService.getDogs()
      .subscribe(
        dogs => (this.dataSource.data = dogs as Dogs[]),
        err => console.log('HTTP Error', err)
      )
  }

  onRowClicked(item: Dogs){
    console.log(item.id)
    this.router.navigate(['/dogs/' + item.id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
