import { Component, EventEmitter, Input, Output } from '@angular/core';
import sidebarTemplate from './sidebar.component.html';

@Component({
    selector: 'ssw-sidebar',
    template: sidebarTemplate
})
export class SidebarComponent {
    @Input() public previewItem: ITask;
    @Input() public formItem: ITask;
    @Input() public action: FormAction;
    @Input() public extended: boolean;
    @Input() public preview: boolean;

    @Output() public save = new EventEmitter<ITask>();
    @Output() public edit = new EventEmitter<ITask>();
    @Output() public cancel = new EventEmitter<void>();
    @Output() public remove = new EventEmitter<ITask>();

    public saveForm(item: ITask): void {
        this.save.emit(item);
    }

    public cancelForm(): void {
        this.cancel.emit();
    }

    public removeTask(task: ITask): void {
        this.remove.emit(task);
    }

    public editTask(task: ITask): void {
        this.edit.emit(task);
    }
}
