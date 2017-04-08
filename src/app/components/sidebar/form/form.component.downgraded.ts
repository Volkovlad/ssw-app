import { downgradeComponent } from '@angular/upgrade/static';
import { FormComponent } from './form.component';

export const formComponentDowngraded = downgradeComponent({
    component: FormComponent,
    inputs: ['item', 'action'],
    outputs: ['save', 'cancel']
});
