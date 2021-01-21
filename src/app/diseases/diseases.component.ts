import { Component, OnInit } from '@angular/core';
import {DiseasesService} from './diseases.service';
import {Disease} from './diseases';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-disease',
  templateUrl: './diseases.component.html',
  providers: [DiseasesService],
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {
  displayedColumns: string[] = ['noun','symptoms','vaccinable','zoonosis','button'];
  diseases: MatTableDataSource<Disease>; 

  constructor(private diseasesService: DiseasesService) { }

  ngOnInit(): void {
    this.getDiseases();
  }

  getDiseases(): void {
    this.diseasesService.getDiseases()
      .subscribe(diseases => {
        this.diseases = new MatTableDataSource(diseases);
        this.diseases.filterPredicate = (data: Disease, filter: string) => {
          return data.noun.trim().toLowerCase().includes(filter);
         };
      });
  }

  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase();
    this.diseases.filter = filterValue;
  }
}
