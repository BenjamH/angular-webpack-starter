import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet, RouterLink, ROUTER_PROVIDERS} from "angular2/router";
import {HomeComponent} from "../home/home";
import {GalleryRouteComponent} from "../gallery/gallery";
import {MenuComponent} from "../../components/menu/menu";

@Component({
    selector: 'app-shell',
    template: require('./app-shell.html'),
    directives: [RouterOutlet, RouterLink, MenuComponent],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    { name: 'Home', path:'/', component: HomeComponent, useAsDefault: true},
    { name: 'Gallery', path:'/gallery', component: GalleryRouteComponent}
])
export class AppShell {

}