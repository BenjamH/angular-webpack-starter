import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
require("./_menu.scss");

@Component({
    selector: 'menu',
    template: require('./menu.html'),
    directives: [ROUTER_DIRECTIVES],
    inputs: ['title', 'items']
    
})
export class MenuComponent {
    public items: any[];
    public title: string;
}