import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultationReportComponent } from './consultation-report/consultation-report.component';
import { ClientsComponent } from './clients/clients.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { DiseaseComponent } from './diseases/disease/disease.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'diseases', component: DiseasesComponent },
  { path: 'disease/:id', component: DiseaseComponent },
  { path: 'reports', component: ConsultationReportComponent },
  { path: 'reports', component: ConsultationReportComponent },
  { path: 'clients', component: ClientsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ConsultationReportComponent,
    DiseasesComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatGridListModule,
    MatAutocompleteModule,
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
