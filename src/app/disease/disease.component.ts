import { Component, OnInit } from '@angular/core';
import { DISEASES } from './temp_diseases_list';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {

  diseases = DISEASES;

  constructor() { }

  ngOnInit(): void {
  }

}
