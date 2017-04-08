import { Component, EventEmitter, Input, Output } from '@angular/core';
import formTemplate from './form.component.html';

@Component({
    selector: 'ssw-form',
    template: formTemplate,
})
export class FormComponent {
    @Input() public item: ITask;
    @Input() public action: FormAction;
    @Output() public save = new EventEmitter<ITask>();
    @Output() public cancel = new EventEmitter<void>();

    public saveForm(): void {
        this.save.emit(this.item);
    }

    public cancelForm(): void {
        this.cancel.emit();
    }

    public onChange(field: FormField, value: string): void {
        this.item[field] = value;
    }
}
