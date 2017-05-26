import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

import { KeyValueModel } from './../../../models/key-value.model';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.less',
        './dropdown-shared/dropdown-for-header.less']
})
export class DropdownComponent implements OnInit {
    @Input() page: string;
    @Input() model: string[];
    @Output() select = new EventEmitter();

    private _timeoutId: any;
    isDropdownActive: boolean = false;
    isActive: boolean;
    el: HTMLElement;

    ngOnInit() {
    }
    constructor(el: ElementRef) {
        this.isActive = false;
        this.el = el.nativeElement;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.isActive = true;
        this.resetCounting();
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.isActive = false;
        this.countDown();
    }
    onDropdownButton($event) {
        this.isDropdownActive = !this.isDropdownActive;
    }

    onDropdownItemClick(item) {
        this.isDropdownActive = false;

        this.select.emit(item);
    }

    resetCounting() {
        clearTimeout(this._timeoutId);
    }

    countDown() {
        this.resetCounting();

        this._timeoutId = setTimeout(() => {
            if (!this.isActive) {
                this.isDropdownActive = false;
            }
        }, 1000);
    }

}
