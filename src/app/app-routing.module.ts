import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultationReportComponent } from './consultation-report/consultation-report.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ViewServiceComponent } from './view-service/view-service.component';

const routes: Routes = [
  { path: 'reports', component: ConsultationReportComponent },
  { path: 'service/:id', component: ViewServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
