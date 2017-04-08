import { Component, EventEmitter, Input, Output } from '@angular/core';
import tasksContainerTemplate from './tasks-container.component.html';

@Component({
    selector: 'ssw-tasks-container',
    template: tasksContainerTemplate
})
export class TasksContainerComponent {
    @Input() public tasks: ITask[];
    @Input() public previewItem: ITask;
    @Output() public preview = new EventEmitter<ITask>();
    @Output() public move = new EventEmitter<{task: ITask, status: Status}>();

    public statuses: Array<Status> = ['todo', 'doing', 'done'];

    public getTasksByStatus (status: Status): Array<ITask> {
        return this.tasks.filter((task: ITask) => {
            return task.status === status;
        })
    }

    public showPreview(task: ITask): void {
        this.preview.emit(task);
    }

    public moveTask (obj: {task: ITask, status: Status}): void {
        this.move.emit(obj);
    }
}
