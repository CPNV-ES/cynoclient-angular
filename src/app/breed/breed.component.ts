import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../providers/provider.service'

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {

  constructor(private dataproviderss: DataProvider) { 
    dataproviderss.LoadBreeds();
  }

  ngOnInit(): void {
  }

}
