import {Http, URLSearchParams, Jsonp} from "angular2/http";
import {Injectable} from "angular2/core";
import {OAUTH_TOKEN} from "../config/local.ts";
import {SearchConfig} from "../config/searchConfig.ts";

@Injectable()
export class ProductsService {

    // constructor(private _http:Http) {
    //
    // }

    constructor(private jsonp: Jsonp) {

    }

    search (keywords: string) {
        var search = new URLSearchParams();
        // search.set('action', 'opensearch');
        // search.set('search', term);
        // search.set('keywords', 'workout+pants');
        search.set('keywords', keywords);
        search.set('designers[]', 'Nike');
        search.set('limit', '5');
        // search.set('offset', '5');
        search.set('localize_currency', 'TRUE');
        search.set('oauth_token', OAUTH_TOKEN);
        search.set('format', 'json');
        return this.jsonp
            .get('https://api.rewardstyle.com/v1/search?callback=JSONP_CALLBACK', {search} )
            .map((response) => response.json().products);
        // return new Promise((resolve, reject)=> {
        //     this._http.get('https://api.rewardstyle.com/v1/search?oauth_token=b0971cc14df1152194c7c9a4e72cf297&keywords=workout+pants&designers[]=Nike&limit=2&offset=5&localize_currency=TRUE')
        //         .map(response=>response.json())
        //         .subscribe(
        //             photos=> {
        //                 resolve(photos);
        //             },
        //             err=> {
        //                 reject(err);
        //             }
        //         );
        // });
    }
    
    // getProducts (config: SearchConfig) {
    //     var search = new URLSearchParams();
    //     search.set('keywords', config.keywords);
    //     search.set('designers[]', config.designers);
    //     search.set('advertisers[]', config.advertisers);
    //     search.set('categories[]', config.categories);
    //     search.set('limit', '5');
    //     search.set('offset', '5');
    //     search.set('localize_currency', 'TRUE');
    //     search.set('oauth_token', OAUTH_TOKEN);
    //     search.set('format', 'json');
    //     return this.jsonp
    //         .get('https://api.rewardstyle.com/v1/search?callback=JSONP_CALLBACK', {search} )
    //         .toPromise()
    //         .then((response) => response.json().products);
    // }
    getProducts (config: SearchConfig) {
        var search = new URLSearchParams();
        search.set('keywords', config.keywords);
        config.designers && search.set('designers[]', config.designers);
        config.advertisers && search.set('advertisers[]', config.advertisers);
        config.categories && search.set('categories[]', config.categories);
        search.set('limit', '16');
        search.set('offset', '16');
        search.set('localize_currency', 'TRUE');
        search.set('oauth_token', OAUTH_TOKEN);
        search.set('format', 'json');
        return this.jsonp
            .get('https://api.rewardstyle.com/v1/search?callback=JSONP_CALLBACK', {search} )
            .toPromise()
            .then((response) => response.json().products);
    }
}