import { FormsModule } from '@angular/forms';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminsComponent } from './admins.component';
import { CommonModule } from '@angular/common';
import { ControlsModule } from './../../../shared/components/controls/controls.module';
import { LayoutModule } from './../../../shared/components/layout/layout.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { adminsRoutes } from './admins.routing';
import { AdminAddPopupComponent } from './admin-shared/admin-add-popup/admin-add-popup.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutModule,
        ControlsModule,
        FormsModule
    ],
    declarations: [
        AdminsComponent,
        AdminListComponent,
        AdminAddPopupComponent
    ]
})
export class AdminsModule { }
