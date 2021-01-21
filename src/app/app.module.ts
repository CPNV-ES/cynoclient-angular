import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultationReportComponent } from './consultation-report/consultation-report.component';
import { DogsComponent } from './dogs/dogs.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDogsComponent } from './dogs/add-dogs/add-dogs.component';
import { DetailsDogsComponent } from './dogs/details-dogs/details-dogs.component';


const routes: Routes = [
  { path: 'reports', component: ConsultationReportComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'dogs/:id', component: DetailsDogsComponent },
  { path: 'dogs/add', component: AddDogsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ConsultationReportComponent,
    DogsComponent,
    AddDogsComponent,
    DetailsDogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
