import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultationReportComponent } from './consultation-report/consultation-report.component';
import { DogsComponent } from './dogs/dogs.component';
import { AddDogsComponent } from './dogs/add-dogs/add-dogs.component';
import { DetailsDogsComponent } from './dogs/details-dogs/details-dogs.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { ClientsComponent } from './clients/clients.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { DiseaseComponent } from './diseases/disease/disease.component';
import { BreedsComponent} from './breeds/breeds.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: 'diseases', component: DiseasesComponent },
  { path: 'disease/:id', component: DiseaseComponent },
  { path: 'reports', component: ConsultationReportComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'breeds', component: BreedsComponent, },
  { path: 'reports', component: ConsultationReportComponent },
  // { path: 'service/create', component: [component]  },
  { path: 'service/:id', component: ServicesComponent },
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
    DetailsDogsComponent,
    DiseasesComponent,
    ClientsComponent,
    BreedsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule,
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
