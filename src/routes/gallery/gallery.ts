
import {Component, OnInit} from "angular2/core";
import {MenuComponent} from "../../components/menu/menu";
import {CardComponent} from "../../components/card/card";
import {StocksService} from "../../core/stocks.service";
import {AdvertisersService} from "../../core/advertisers.service";
// ***Need to use top designers service***
// import {DesignersService} from "../../core/designers.service.ts";
import {Control} from "angular2/common";
import {Observable} from "rxjs/Observable";
// import {SearchConfig} from '../../config/searchConfig';
// import {UppercasePlusPipe} from '../../core/uppercase-plus.pipe'

require('./_gallery.scss');
require('../../animate.scss');

@Component({
    selector: 'gallery',
    template: require('./gallery.html'),
    providers: [StocksService, AdvertisersService],
    directives: [MenuComponent, CardComponent]
    // pipes: [UppercasePlusPipe]
})
export class GalleryRouteComponent implements OnInit {
    // ***for observable search***
    // public stocksSearch: Observable<Array<string>>;
    private stocks;
    private advertisers;
    private symbols;
    private active;
    // private designers;
    // public keywords = new Control();
    public advertiserTitle: string;
    public designerTitle: string;
    // private config: SearchConfig;
    private clicked: boolean;


    constructor(private stocksService:StocksService,
                private advertisersService: AdvertisersService) {
        // ***for observable search***
        // this.stocksSearch = this.keywords.valueChanges
        //                 .debounceTime(400)
        //                 .distinctUntilChanged()
        //                 .switchMap(keywords => this.stocksService.search(keywords));
        // this.config = new SearchConfig();
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

    getStockQuotes (symbols: string) {
        this.clicked = true;
        this.stocks = null;
        this.stocksService.getStockQuotes(symbols)
            .then(stocks=>{
                this.stocks = stocks;
                this.clicked = false;
            })
    }
    
    switchToActive () {
        this.active = true;
    }

}