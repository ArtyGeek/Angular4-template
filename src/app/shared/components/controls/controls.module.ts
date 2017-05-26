import { SelectModule } from 'angular2-select';
import { SelectComponent } from './select/select.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        SelectModule
    ],
    declarations: [
        InputComponent,
        SelectComponent,
        SearchComponent,
        ButtonComponent,
        CheckboxComponent,
        DropdownComponent
    ],
    exports: [
        InputComponent,
        SelectComponent,
        SearchComponent,
        ButtonComponent,
        CheckboxComponent,
        DropdownComponent
    ],
    providers: [
    ],
    bootstrap: [
    ]
})


export class ControlsModule { }
