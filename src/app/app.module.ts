// AngularJS imports
import { module } from 'angular';

import { ApiService } from './services';
import {
    appComponent,
    headerComponentDowngraded,
    tasksContainerComponentDowngraded,
    taskComponentDowngraded,
    sidebarComponent,
    previewComponentDowngraded,
    formComponentDowngraded
} from './components';

// AngularJS module
module ('todoApp', [])
    .component('sswApp', appComponent)
    .directive('sswHeader', headerComponentDowngraded)
    .directive('sswTasksContainer', tasksContainerComponentDowngraded)
    .directive('sswTask', taskComponentDowngraded)
    .component('sswSidebar', sidebarComponent)
    .directive('sswPreview', previewComponentDowngraded)
    .directive('sswForm', formComponentDowngraded)
    .service('ApiService', ApiService)
    .name;

// Angular imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import {
    HeaderComponent,
    TaskComponent,
    TasksContainerComponent,
    FormComponent,
    PreviewComponent
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
        TasksContainerComponent,
        FormComponent,
        PreviewComponent
    ],
    entryComponents: [
        HeaderComponent,
        TaskComponent,
        TasksContainerComponent,
        FormComponent,
        PreviewComponent
    ]
})
export class AppModule {
    ngDoBootstrap() {}
}
