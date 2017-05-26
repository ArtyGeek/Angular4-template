import { Component } from '@angular/core';
import { HeaderHttpService } from './header-shared/header-http.service';
import { HeaderOperationService } from './header-shared/header-operation.service';
import { KeyValueModel } from './../../../models/key-value.model';

@Component({
    selector: 'app-layout-header',
    styleUrls: ['./header.component.less'],
    templateUrl: './header.component.html',
    providers: [HeaderHttpService, HeaderOperationService]
})

export class HeaderComponent {
    public dropdownItems: string[];

    constructor(private _operationService: HeaderOperationService) {
        this.dropdownItems = this._operationService.getDropdownItem();
    }

    selectHandler(item) {
        this._operationService.getItemHandler(item)();
    }


}
