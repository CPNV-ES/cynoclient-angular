import { Component, OnInit } from '@angular/core';
import {DiseasesService} from './disease.service';
import {Disease} from './disease';
@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  providers: [DiseasesService],
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {
  diseases: Disease[];

  constructor(private diseasesService: DiseasesService) { }

  ngOnInit(): void {
    this.getDiseases();
  }

  getDiseases(): void {
    this.diseasesService.getDiseases()
      .subscribe(diseases => (this.diseases = diseases));
  }
}
