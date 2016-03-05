
import {Component} from "angular2/core";
import {CardComponent} from "../../components/card/card";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'home',
    template: require('./home.html'),
    directives: [CardComponent, ROUTER_DIRECTIVES]
})
export class HomeComponent {

}