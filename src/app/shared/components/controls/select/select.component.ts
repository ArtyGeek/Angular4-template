import { ValidationPropertyModel } from './../../../models/validator-property.model';
import { SelectModel } from './select-shared/select.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SelectModule } from 'angular2-select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.less'],


})
export class SelectComponent implements OnInit {
    @Input() model: SelectModel;
    @Input() page: string;
    @Output() opened = new EventEmitter();
    @Output() closed = new EventEmitter();
    @Output() selected = new EventEmitter();
    @Output() deselected = new EventEmitter();
    @Input() validator: ValidationPropertyModel;

    constructor() {
    }
    ngOnInit() {
    }
    onSelectOpened() {
        this.opened.emit();
    }

    onSelectClosed() {
        this.closed.emit();
    }

    onSelected(item) {
        this.selected.emit(item);
    }

    onDeselected(item) {
        this.deselected.emit(item);
    }

    get isFilter(): number {
        return this.model.filter ? 0 : this.model.options.length + 1;
    }

}
