import { Component, OnInit } from '@angular/core';
import { SERVICES } from './temp_services_list';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-consultation-report',
  templateUrl: './consultation-report.component.html',
  styleUrls: ['./consultation-report.component.css']
})
export class ConsultationReportComponent implements OnInit {

  services = SERVICES;

  constructor() {
   }

  ngOnInit(): void {
  }

}
