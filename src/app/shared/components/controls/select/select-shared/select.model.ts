import { ValueLabelModel } from './value-label.model';
export class SelectModel {
    constructor(
        public options: Array<ValueLabelModel>,
        public formControlName: string = '',
        public multiple: boolean = false,
        public placeholder: string = '',
        public allowClear: boolean = false,
        public filter: boolean = false,
        public highlightColor: string = '#d2d200',
        public highlightTextColor: string = '#ff00ff'
    ) { }
}
