import { downgradeComponent } from '@angular/upgrade/static';
import { PreviewComponent } from './preview.component';

export const previewComponentDowngraded = downgradeComponent({
    component: PreviewComponent,
    inputs: ['item'],
    outputs: ['edit', 'remove']
});
