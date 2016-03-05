import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet} from "angular2/router";
import {HomeComponent} from "../home/home";
import {GalleryRouteComponent} from "../gallery/gallery";

@Component({
    selector: 'app-shell',
    template: require('./app-shell.html'),
    directives: [RouterOutlet]
})
@RouteConfig([
    { name: 'Home', path:'/', component: HomeComponent, useAsDefault: true},
    { name: 'Gallery', path:'/gallery', component: GalleryRouteComponent}
])
export class AppShell {

}