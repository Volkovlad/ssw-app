import { downgradeComponent } from '@angular/upgrade/static';
import { TaskComponent} from './task.component';

export const taskComponentDowngraded = downgradeComponent({
    component: TaskComponent,
    inputs: ['task', 'active'],
    outputs: ['preview', 'move']
});
