// designers return too many results. should use top designers feed (in xml format)

// import {Jsonp} from "angular2/http";
// import {Injectable} from "angular2/core";
// import {OAUTH_TOKEN} from "../config/local.ts";
//
//
// @Injectable()
// export class DesignersService {
//    
//     constructor(private jsonp:Jsonp) {
//
//     }
//
//     getDesigners():Promise<any> {
//
//         return new Promise((resolve, reject)=> {
//             this.jsonp.get('https://api.rewardstyle.com/v1/designers?callback=JSONP_CALLBACK&oauth_token=' + OAUTH_TOKEN)
//                 .map(response=>response.json().designers)
//                 .subscribe(
//                     designers=> {
//                         resolve(designers);
//                     },
//                     err=> {
//                         reject(err);
//                     }
//                 );
//         });
//     }
// }