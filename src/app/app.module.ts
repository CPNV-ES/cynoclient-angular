import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ConsultationReportComponent } from './consultation-report/consultation-report.component';
import {HttpClientModule} from '@angular/common/http';
import { BreedsComponent } from './breeds/breeds.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  { path: 'breeds', component: BreedsComponent, }
];

@NgModule({
  declarations: [
    AppComponent,
    //ConsultationReportComponent,
    BreedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
