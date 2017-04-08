import { downgradeComponent } from '@angular/upgrade/static';
import { TasksContainerComponent } from './tasks-container.component';

export const tasksContainerComponentDowngraded = downgradeComponent({
    component: TasksContainerComponent,
    inputs: ['tasks', 'previewItem'],
    outputs: ['preview', 'move']
});
