import { Globals } from './../shared/globals/globals';
import { StorageService } from './../shared/services/storage.service';
import { HttpService } from './../shared/services/http.service';
import { PopupsModule } from './../shared/components/popups/popups.module';
import { appRouting } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        appRouting,
        CoreModule,
        AuthModule
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
