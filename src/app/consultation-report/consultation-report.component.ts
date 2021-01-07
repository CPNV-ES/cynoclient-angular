import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation-report',
  templateUrl: './consultation-report.component.html',
  styleUrls: ['./consultation-report.component.css']
})
export class ConsultationReportComponent implements OnInit {

  services:any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/services') 
    .subscribe(Response => { 
      console.log(Response); 
      this.services=Response; 
    }); 
  }
}
