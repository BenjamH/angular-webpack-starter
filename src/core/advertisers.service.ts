import {Jsonp} from "angular2/http";
import {Injectable} from "angular2/core";
import {OAUTH_TOKEN} from "../config/local.ts";


@Injectable()
export class AdvertisersService {
    
    constructor(private jsonp:Jsonp) {
        
    }

    getAdvertisers():Promise<any> {

        return new Promise((resolve, reject)=> {
            this.jsonp.get('https://api.rewardstyle.com/v1/advertisers?callback=JSONP_CALLBACK&oauth_token=' + OAUTH_TOKEN)
                .map(response=>response.json().advertisers)
                .subscribe(
                    advertisers=> {
                        resolve(advertisers);
                    },
                    err=> {
                        reject(err);
                    }
                );
        });
    }
}