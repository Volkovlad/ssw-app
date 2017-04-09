// AngularJS imports
import { module } from 'angular';

import { ApiService, ApiServiceDowngraded } from './services';

import {
    appComponentDowngraded,
    headerComponentDowngraded,
    tasksContainerComponentDowngraded,
    taskComponentDowngraded,
    sidebarComponentDowngraded,
    previewComponentDowngraded,
    formComponentDowngraded
} from './components';

// AngularJS module
module ('todoApp', [])
    .directive('sswApp', appComponentDowngraded)
    .directive('sswHeader', headerComponentDowngraded)
    .directive('sswTasksContainer', tasksContainerComponentDowngraded)
    .directive('sswTask', taskComponentDowngraded)
    .directive('sswSidebar', sidebarComponentDowngraded)
    .directive('sswPreview', previewComponentDowngraded)
    .directive('sswForm', formComponentDowngraded)
    .factory('ApiService', ApiServiceDowngraded)
    .name;

// Angular imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import {
    AppComponent,
    HeaderComponent,
    TaskComponent,
    TasksContainerComponent,
    FormComponent,
    PreviewComponent,
    SidebarComponent
} from './components';


// Angular module
@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        TaskComponent,
        TasksContainerComponent,
        FormComponent,
        PreviewComponent,
        SidebarComponent
    ],
    entryComponents: [
        AppComponent,
        HeaderComponent,
        TaskComponent,
        TasksContainerComponent,
        FormComponent,
        PreviewComponent,
        SidebarComponent
    ],
    providers: [
        ApiService
    ]
})
export class AppModule {
    ngDoBootstrap() {}
}
