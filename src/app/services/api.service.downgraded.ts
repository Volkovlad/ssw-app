import { downgradeInjectable } from '@angular/upgrade/static';
import { ApiService } from './api.service';

export const ApiServiceDowngraded = downgradeInjectable(ApiService);
