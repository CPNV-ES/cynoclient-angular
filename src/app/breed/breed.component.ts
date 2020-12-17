import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {

  breeds: any;

  constructor() {
        
   }

  ngOnInit(): void {
  }

  showLink(v: any){
    window.open(v.link)
  }

}
