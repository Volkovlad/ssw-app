// AngularJS imports
import { module } from 'angular';

import { ApiService, apiServiceProvider } from './services';
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
    .service('ApiService', ApiService)
    .name;

// Angular imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

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
        UpgradeModule
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
        apiServiceProvider
    ]
})
export class AppModule {
    ngDoBootstrap() {}
}
