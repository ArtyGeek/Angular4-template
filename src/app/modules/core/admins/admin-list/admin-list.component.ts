import { AdminAddPopupModel } from './../admin-shared/admin-add-popup/admin-add-popup-shared/admin-add-popup.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    templateUrl: './admin-list.component.html',
    styleUrls: ['./admin-list.component.less']
})
export class AdminListComponent implements OnInit {
    isAddVisible: boolean = false;
    constructor() {
    }

    ngOnInit() {
    }

    onAddAdmin() {
        this.isAddVisible = true;
    }

    handlerSubmit(user: AdminAddPopupModel) {
    }

}
