import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less',
        './button-shared/button-for-login.less']
})
export class ButtonComponent implements OnInit {
    @Input() capture: string = '';
    @Output() click = new EventEmitter();
    @Input() styles: string;
    @Input() type: string = 'submit';
    constructor() { }

    ngOnInit() {
    }
    onClick($event) {
        this.click.emit($event);
    }
}
