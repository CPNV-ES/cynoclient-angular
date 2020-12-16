import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../providers/provider.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {

  breeds: any;

  constructor(private dataproviderss: DataProvider) {
    dataproviderss.LoadAPI('/breeds').then(data => {
        this.breeds = data
        console.log(this.breeds)
      }
    )
    
   }

  ngOnInit(): void {
  }

}
