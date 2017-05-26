import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ControlsModule } from './../../shared/components/controls/controls.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { RouterModule } from '@angular/router';
import { authRouting } from './auth.routing';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        HttpModule,
        CommonModule,
        ControlsModule,
        FormsModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        PasswordRecoveryComponent
    ]
})
export class AuthModule { }
