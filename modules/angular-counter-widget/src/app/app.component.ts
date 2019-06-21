import {Component} from '@angular/core';

import LiferayParams from '../types/LiferayParams'

declare const Liferay: any;

@Component({
    templateUrl: '/o/angular-counter-widget/app/app.component.html'
})
export class AppComponent {
    params: LiferayParams;
    counter: number;

    constructor() {
        let _this = this;
        Liferay.Loader.require(['react-counting-widget@1.0.0/Counter'], function (Counter: any) {
            _this.counter = Counter.Service.getCounter();
        });
    }

    increment() {
        let _this = this;
        Liferay.Loader.require(['react-counting-widget@1.0.0/Counter'], function (Counter: any, counterService: any) {
            Counter.Service.increment();
        });
        Liferay.Loader.require(['react-counting-widget@1.0.0/Counter'], function (Counter: any) {
            _this.counter = Counter.Service.getCounter();
        });
    }

    get configurationJSON() {
        return JSON.stringify(this.params.configuration, null, 2);
    }
}
