import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <pm-products></pm-products>
    `
})
export class AppComponent {
    pageTitle: string = 'Neil Armstrong';
}
