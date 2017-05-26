import { AddAdminPopupValidatior } from './admin-add-popup-shared/admin-add-popup.validator';
import { AdminAddPopupModel } from './admin-add-popup-shared/admin-add-popup.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-admin-add-popup',
    templateUrl: './admin-add-popup.component.html',
    styleUrls: ['./admin-add-popup.component.less']
})
export class AdminAddPopupComponent implements OnInit {
    @Input() visability: boolean;
    @Output() visabilityChange = new EventEmitter();
    @Output() submit = new EventEmitter();
    model: AdminAddPopupModel;
    public validator: AddAdminPopupValidatior;


    constructor() {
        this.model = new AdminAddPopupModel();
        this.validator = new AddAdminPopupValidatior(this.model);
    }

    ngOnInit() {
    }

    onClose() {
        this._close();
    }

    onSubmit() {
        this.validator.submit();
        if (!this.validator.isFormValid()) { return; }
        this.submit.emit(this.model);
        this._close();
    }

    private _close() {
        this.visability = false;
        this.visabilityChange.emit(this.visability);
    }
}
