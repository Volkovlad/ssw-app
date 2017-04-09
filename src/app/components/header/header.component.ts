import { Component, EventEmitter, Output } from '@angular/core';
import headerTemplate from './header.component.html'

@Component({
    selector: 'ssw-header',
    template: headerTemplate
})
export class HeaderComponent {
    @Output() add = new EventEmitter<void>();

    public addNewTask(): void {
        this.add.emit();
    }
}

