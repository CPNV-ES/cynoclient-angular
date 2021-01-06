import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultationReportComponent } from './consultation-report/consultation-report.component';
import { BreedsComponent } from './breeds/breeds.component';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  { path: 'reports', component: ConsultationReportComponent },
  { path: 'breeds', component: BreedsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConsultationReportComponent,
    BreedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
