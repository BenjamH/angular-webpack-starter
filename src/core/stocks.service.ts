import {URLSearchParams, Jsonp, JSONP_PROVIDERS, Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {OAUTH_TOKEN} from "../config/local.ts";
import {SearchConfig} from "../config/searchConfig.ts";

@Injectable()
export class StocksService {

    constructor(private jsonp: Jsonp) {

    }

    // formally used as observable to list results on keystrokes.
    
    // search (keywords: string) {
    //     var search = new URLSearchParams();
    //     search.set('action', 'opensearch');
    //     search.set('search', keywords);
    //     search.set('keywords', 'workout+pants');
    //     search.set('keywords', keywords);
    //     search.set('designers[]', 'Nike');
    //     search.set('limit', '5');
    //     search.set('offset', '5');
    //     search.set('localize_currency', 'TRUE');
    //     search.set('oauth_token', OAUTH_TOKEN);
    //     search.set('format', 'json');
    //     return this.jsonp
    //         .get('https://api.rewardstyle.com/v1/search?callback=JSONP_CALLBACK', {search} )
    //         .map((response) => response.json().products);
    // }

    // getPhotos():Promise<any> {
    //
    //     return new Promise((resolve, reject)=> {
    //         this.http.get('http://jsonplaceholder.typicode.com/albums/1/photos')
    //             .map(response=>response.json())
    //             .subscribe(
    //                 photos=> {
    //                     resolve(photos);
    //                 },
    //                 err=> {
    //                     reject(err);
    //                 }
    //             );
    //     });p
    // }
    //
    
    getStockQuotes (symbols) {
        var search = new URLSearchParams();
        search.set('symbols', symbols);
        search.set('key', '5b48b49b5d8a52d5ec3530773d216a97');
        return this.jsonp
            .get('http://marketdata.websol.barchart.com/getQuote.jsonp?callback=JSONP_CALLBACK', {search} )
            .toPromise()
            .then((response) => response.json().results);
    }
}