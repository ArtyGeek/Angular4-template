import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const authRoutes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [
        { path: 'login', component: LoginComponent },
        { path: 'password-recovery', component: PasswordRecoveryComponent }
    ]
}];

export const appRoutingProviders: any[] = [];
export const authRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);
