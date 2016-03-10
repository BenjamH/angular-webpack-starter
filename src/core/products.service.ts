import {URLSearchParams, Jsonp} from "angular2/http";
import {Injectable} from "angular2/core";
import {OAUTH_TOKEN} from "../config/local.ts";
import {SearchConfig} from "../config/searchConfig.ts";

@Injectable()
export class ProductsService {


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
            .then((response) => response.json());
    }
}