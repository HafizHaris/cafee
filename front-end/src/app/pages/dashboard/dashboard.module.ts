import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CabinCardComponent } from './cabin-card/cabin-card.component';
import {Tooltip, TooltipModule} from 'primeng/tooltip';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonComponent } from 'src/app/layout/skeleton/skeleton/skeleton.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CabinCardComponent,
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    ButtonModule,
    BadgeModule,
    TooltipModule,
    NgxSkeletonLoaderModule,
  ]
})
export class DashboardModule { }
