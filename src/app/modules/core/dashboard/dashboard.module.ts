import { ControlsModule } from './../../../shared/components/controls/controls.module';
import { dashboardRouting } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        ControlsModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
