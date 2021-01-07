import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultationReportComponent } from './consultation-report/consultation-report.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'reports', component: ConsultationReportComponent },
  { path: 'service/:id', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
