import { DogsService } from '../dogs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dogs } from '../dog';


@Component({
  selector: 'app-details-dogs',
  templateUrl: './details-dogs.component.html',
  styleUrls: ['./details-dogs.component.css']
})

export class DetailsDogsComponent implements OnInit {

  dog!: Dogs;

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
        data => (this.dog = data as Dogs),
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
