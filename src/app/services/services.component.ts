import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from './service';
import { ServicesService } from './services.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  providers: [ServicesService],
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  service: Service[];
  id: any;

  constructor(private servicesService: ServicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getService(this.id);
  }

  getService(id: string): void {
    this.servicesService.getService(id)
    .subscribe(service => {
      this.service = service;  
      console.log(this.service)   
    })
  }

}
