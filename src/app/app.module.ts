import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChartColumn, Heart, Plus } from 'lucide-angular';
import { AppComponent } from './app.component';
import { AnalyticsComponent } from './page/analytics/analytics.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HomeComponent } from './page/home/home.component';
import { DonationsComponent } from './page/donations/donations.component';
import { RequestsComponent } from './page/requests/requests.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    DashboardComponent,
    HomeComponent,
    DonationsComponent,
    RequestsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    LucideAngularModule.pick({ ChartColumn, Heart, Plus }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
