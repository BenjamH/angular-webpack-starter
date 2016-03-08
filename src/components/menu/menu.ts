import {Component} from "angular2/core";
import {Router} from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'menu',
    template: require('./menu.html'),
    directives: [ROUTER_DIRECTIVES]
    
})
export class MenuComponent {
}