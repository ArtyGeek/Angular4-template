import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginModel } from './login-shared/login.model';
import { LoginValidator } from './login-shared/login.validator';
import { Validator } from './../../../shared/validator/validator';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
    model: LoginModel;
    validator: LoginValidator;

    constructor(private _router: Router) {
        this.model = new LoginModel();
        this.validator = new LoginValidator(this.model);
    }

    ngOnInit() {
    }

    onSubmit() {
        this.validator.submit();
        if (!this.validator.isFormValid()) { return; }
        this._router.navigate(['/dashboard']);
    }
}
