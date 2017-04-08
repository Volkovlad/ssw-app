import { Component, EventEmitter, Input, Output } from '@angular/core';
import previewTemplate from './preview.component.html';

@Component({
    selector: 'ssw-preview',
    template: previewTemplate
})
export class PreviewComponent {
    @Input() public item: ITask;
    @Output() public edit = new EventEmitter<ITask>();
    @Output() public remove = new EventEmitter<ITask>();

    public getDateFromTimestamp(timestamp: number, locale?: boolean): string | Date {
        return locale ? (new Date(timestamp)).toLocaleString() : new Date(timestamp);
    }

    public editTask(): void {
        this.edit.emit(this.item);
    }

    public removeTask(task: ITask): void {
        this.remove.emit(task);
    }
}
