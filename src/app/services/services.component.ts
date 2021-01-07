import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  service:any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http : HttpClient
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.http.get('http://127.0.0.1:3000/services/' + id) 
    .subscribe(Response => { 
      console.log(Response); 
      this.service=Response; 
    }); 
  }

}
