
import {Component, OnInit} from "angular2/core";
import {MenuComponent} from "../../components/menu/menu";
import {ProductsService} from "../../core/products.service.ts";
import {AdvertisersService} from "../../core/advertisers.service.ts";
import {DesignersService} from "../../core/designers.service.ts";
import {Control} from "angular2/common";
import {Observable} from "rxjs/Observable";
import {NgClass} from 'angular2/common';
import {NgForm} from 'angular2/common';
import {SearchConfig} from '../../config/searchConfig.ts';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
require('./_gallery.scss');

@Component({
    selector: 'gallery',
    template: require('./gallery.html'),
    providers: [ProductsService, AdvertisersService, DesignersService],
    directives: [MenuComponent],
})
export class GalleryRouteComponent implements OnInit {
    productsSearch: Observable<Array<string>>;
    products;
    private advertisers;
    private designers;
    keywords = new Control();
    advertiserTitle: string;
    designerTitle: string;
    config: SearchConfig;
    clicked: boolean;
    // config = new SearchConfig('a','a','a','a');


    constructor(private productsService:ProductsService,
                private advertisersService: AdvertisersService,
                private designersService: DesignersService) {
        this.productsSearch = this.keywords.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .switchMap(keywords => this.productsService.search(keywords));
        this.advertiserTitle = "Advertisers";
        this.designerTitle = "Designers";
        this.config = new SearchConfig();
        this.clicked = false;
    }

    ngOnInit () {
            this.advertisersService.getAdvertisers()
                .then(advertisers=> {
                    this.advertisers = advertisers;
                    console.log(advertisers);
                }, err=> {
                    console.log(err);
                });
            // this.designersService.getDesigners()
            //     .then(designers=> {
            //         this.designers = designers;
            //         this.active = true;
            //         console.log(designers);
            //     });

    }

    getProducts () {
        this.clicked = true;
        let search = this.config;
        this.productsService.getProducts(search)
            .then(products=>{
                this.products = products;
                this.clicked = false;
            })

    }

    get diagnostic() { return JSON.stringify(this.config); }

}