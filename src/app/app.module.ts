// AngularJS imports
import { module } from 'angular';

import { ApiService } from './services';
import {
    appComponent,
    headerComponentDowngraded,
    tasksContainerComponentDowngraded,
    taskComponentDowngraded,
    sidebarComponent,
    previewComponent,
    formComponent
} from './components';

// AngularJS module
module ('todoApp', [])
    .component('sswApp', appComponent)
    .directive('sswHeader', headerComponentDowngraded)
    .directive('sswTasksContainer', tasksContainerComponentDowngraded)
    .directive('sswTask', taskComponentDowngraded)
    .component('sswSidebar', sidebarComponent)
    .component('sswPreview', previewComponent)
    .component('sswForm', formComponent)
    .service('ApiService', ApiService)
    .name;

// Angular imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import {
    HeaderComponent,
    TaskComponent,
    TasksContainerComponent
} from './components';


// Angular module
@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        HeaderComponent,
        TaskComponent,
        TasksContainerComponent
    ],
    entryComponents: [
        HeaderComponent,
        TaskComponent,
        TasksContainerComponent
    ]
})
export class AppModule {
    ngDoBootstrap() {}
}
