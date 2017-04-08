import { Component, EventEmitter, Input, Output } from '@angular/core';
import taskTemplate from './task.component.html';

@Component({
    selector: 'ssw-task',
    template: taskTemplate
})
export class TaskComponent {
    @Input() public task: ITask;
    @Input() public active: boolean;
    @Output() public preview = new EventEmitter<ITask>();
    @Output() public move = new EventEmitter<{task: ITask, status: Status}>();

    public taskLabel = 'SSW'; // Stands for SoftServe Workshop
    public statuses: Array<Status> = ['todo', 'doing', 'done'];

    public getRemainingStatuses (currentStatus: Status): Array<Status> {
        let remainingStatuses: Array<Status> = [];

        this.statuses.forEach((status: Status) => {
            if (status !== currentStatus) {
                remainingStatuses.push(status);
            }
        });

        return remainingStatuses;
    }

    public showPreview(task: ITask): void {
        this.preview.emit(task);
    }

    public moveTask (task: ITask, status: Status): void {
        this.move.emit({task, status});
    }
}
