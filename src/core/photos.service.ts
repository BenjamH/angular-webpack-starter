import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class PhotosService {

    constructor(private http:Http) {

    }

    getPhotos():Promise<any> {

        return new Promise((resolve, reject)=> {
            this.http.get('http://jsonplaceholder.typicode.com/albums/1/photos')
                .map(response=>response.json())
                .subscribe(
                    photos=> {
                        resolve(photos);
                    },
                    err=> {
                        reject(err);
                    }
                );
        });
    }
}