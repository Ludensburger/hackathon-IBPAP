import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalyticsComponent } from './page/analytics/analytics.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HomeComponent } from './page/home/home.component';
import { DonationsComponent } from './page/donations/donations.component';
import { RequestsComponent } from './page/requests/requests.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'requests', component: RequestsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
