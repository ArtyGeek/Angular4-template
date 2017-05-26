import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-password-recovery',
    templateUrl: './password-recovery.component.html',
    styleUrls: ['./password-recovery.component.less']
})
export class PasswordRecoveryComponent implements OnInit {
    recoveryEmail: string = '';

    constructor(private _router: Router) { }

    ngOnInit() {
    }

    onSubmit() {
        this._router.navigate(['/dashboard']);
    }
}
