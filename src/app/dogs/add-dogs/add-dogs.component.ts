import { DogsService } from '../dogs.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-dogs',
  templateUrl: './add-dogs.component.html',
  styleUrls: ['./add-dogs.component.css']
})
export class AddDogsComponent implements OnInit {

  constructor(
    private tutorialService: DogsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void { }

}
