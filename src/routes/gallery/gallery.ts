
import {Component, OnInit} from "angular2/core";
import {MenuComponent} from "../../components/menu/menu";
import {CardComponent} from "../../components/card/card";
import {ProductsService} from "../../core/products.service";
import {AdvertisersService} from "../../core/advertisers.service";
// ***Need to use top designers service***
// import {DesignersService} from "../../core/designers.service.ts";
import {Control} from "angular2/common";
import {Observable} from "rxjs/Observable";
import {SearchConfig} from '../../config/searchConfig';
import {UppercasePlusPipe} from '../../core/uppercase-plus.pipe'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
require('./_gallery.scss');

@Component({
    selector: 'gallery',
    template: require('./gallery.html'),
    providers: [ProductsService, AdvertisersService],
    directives: [MenuComponent, CardComponent],
    pipes: [UppercasePlusPipe]
})
export class GalleryRouteComponent implements OnInit {
    // ***for observable search***
    // public productsSearch: Observable<Array<string>>;
    private products;
    private advertisers;
    private error;
    // private designers;
    public keywords = new Control();
    public advertiserTitle: string;
    public designerTitle: string;
    private config: SearchConfig;
    private clicked: boolean;


    constructor(private productsService:ProductsService,
                private advertisersService: AdvertisersService) {
        // ***for observable search***
        // this.productsSearch = this.keywords.valueChanges
        //                 .debounceTime(400)
        //                 .distinctUntilChanged()
        //                 .switchMap(keywords => this.productsService.search(keywords));
        this.config = new SearchConfig();
        this.clicked = false;
    }

    ngOnInit () {
            this.advertisersService.getAdvertisers()
                .then(advertisers=> {
                    this.advertisers = advertisers;
                }, err=> {
                    console.log(err);
                });
            // ***need to use top designers feed***
            // this.designersService.getDesigners()
            //     .then(designers=> {
            //         this.designers = designers;
            //         this.active = true;
            //         console.log(designers);
            //     });

    }

    getProducts () {
        this.clicked = true;
        this.error = false;
        this.products = null;
        let search = this.config;
        this.productsService.getProducts(search)
            .then(data=>{
                data.products.length === 0? this.error = data.error : this.products = data.products;
                // this.products = data.products;
                this.clicked = false;
            })
    }

}