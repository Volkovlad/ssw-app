import { downgradeComponent } from '@angular/upgrade/static';
import { SidebarComponent } from './sidebar.component';

export const sidebarComponentDowngraded = downgradeComponent({
    component: SidebarComponent,
    inputs: ['previewItem', 'formItem', 'action', 'extended', 'preview'],
    outputs: ['save', 'cancel', 'edit', 'remove']
});
