import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'

declare const Liferay: any;

@Component({
    templateUrl: '/o/angular-counter-widget/app/app.component.html'
})
export class AppComponent {
    params: LiferayParams;
    counter: any;

    constructor() {
        this.counter = 0;
    }

    increment() {
        this.counter = this.counter + 1;
    }

    get configurationJSON() {
        return JSON.stringify(this.params.configuration, null, 2);
    }
}
