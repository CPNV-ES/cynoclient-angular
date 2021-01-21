import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ClientsService} from './clients.service';
import {Client} from './client';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  providers: [ClientsService],
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: MatTableDataSource<Client>;
  displayedColumns: string[] = ['firstname', 'lastname', 'sex', 'phone'];

  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.clients.filter = filterValue;
  }

  constructor(private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientsService.getClients()
      .subscribe(clients => {
        this.clients = new MatTableDataSource(clients);

        this.clients.filterPredicate = (data: Client, filter: string) => {
          return data.lastname.trim().toLowerCase().includes(filter);
        }

      });
  }
}



