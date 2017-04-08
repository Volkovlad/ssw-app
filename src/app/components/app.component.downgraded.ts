import { downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';

export const appComponentDowngraded = downgradeComponent({
    component: AppComponent,
    inputs: [],
    outputs: []
});
