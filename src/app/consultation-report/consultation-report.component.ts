import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Consultation } from './consultation';
import { ConsultationReportService } from './consultation-report.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultation-report',
  templateUrl: './consultation-report.component.html',
  providers: [ConsultationReportService],
  styleUrls: ['./consultation-report.component.css']
})
export class ConsultationReportComponent implements OnInit {

  services: MatTableDataSource<Consultation>;
  displayedColumns: string[] = ['type', 'moment', 'dogs'];

  constructor(private router : Router, private consultationReportService: ConsultationReportService) { }

  ngOnInit(): void {
    this.getServices();
  }

  applyFilter(filterValue: string) {
    this.services.filter = filterValue.trim().toLowerCase();
  }

  getServices(): void{
    this.consultationReportService.getServices()
    .subscribe(services => {
      this.services = new MatTableDataSource(services);

        /*
         apply a filter on a single column
        */
        // this.services.filterPredicate = function(data:Consultation, filter: string): boolean {
        //   return data.moment.toLowerCase().includes(filter);
        // }
    })
  }

  getRecord(id: any){
    this.router.navigateByUrl("service/"+id)
  }

  addService(): void{
    console.log("addService");
    this.router.navigateByUrl("service/create")
  }
}
