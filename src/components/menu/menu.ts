import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Router} from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";
require("./_menu.scss");

@Component({
    selector: 'menu',
    template: require('./menu.html'),
    directives: [ROUTER_DIRECTIVES],
    outputs: ['clickIt'],
    inputs: ['title']
    
})
export class MenuComponent {

    @Input()
    items;
    
    public clickIt: EventEmitter<any> = new EventEmitter();

    fireMyEvent() {
        this.clickIt.emit(null);
    }

    public title: string;

    @Input()
    description:string;

    @Input()
    linkText:string;

    @Input()
    link:string;
}