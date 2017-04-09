import { ApiService } from './services';

// Angular imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
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
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
