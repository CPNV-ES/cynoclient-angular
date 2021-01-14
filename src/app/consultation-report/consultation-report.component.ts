import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { consultation } from './consultation';
import { ConsultationReportService } from './consultation-report.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultation-report',
  templateUrl: './consultation-report.component.html',
  providers: [ConsultationReportService],
  styleUrls: ['./consultation-report.component.css']
})
export class ConsultationReportComponent implements OnInit {

  services: MatTableDataSource<consultation>;
  displayedColumns: string[] = ['type', 'moment', 'dogs'];

  constructor(private router : Router, private consultationReportService: ConsultationReportService) { }

  ngOnInit(): void {
    this.getServices();
  }

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim().toLowerCase();  // Remove whitespace // MatTableDataSource defaults to lowercase matches
      this.services.filter = filterValue;
  }

  getServices(): void{
    this.consultationReportService.getServices()
    .subscribe(services => {
      this.services = new MatTableDataSource(services);

        this.services.filterPredicate = function(data:consultation, filter: string): boolean {
          return data.moment.toLowerCase().includes(filter);
        }
    })
  }

  getRecord(id: any){
    // console.log(id)
    this.router.navigateByUrl("service/"+id)
  }

  addColumn(): void{
    console.log("addColumn");
  }
}
