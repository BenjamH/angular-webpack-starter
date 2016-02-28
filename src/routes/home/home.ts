
import {Component} from "angular2/core";
import {CardComponent} from "../../components/card/card";

@Component({
    selector: 'home',
    template: require('./home.html'),
    directives: [CardComponent]
})
export class HomeComponent {

}