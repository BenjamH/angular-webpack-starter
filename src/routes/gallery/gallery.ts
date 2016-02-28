
import {Component, OnInit} from "angular2/core";
import {PhotosService} from "../../core/photos.service";
require('./_gallery.scss');

@Component({
    selector: 'gallery',
    template: require('./gallery.html'),
    providers: [PhotosService]
})
export class GalleryRouteComponent implements OnInit {
    private photos;

    ngOnInit() {
        this.photoService.getPhotos()
            .then(photos=>{
                this.photos = photos;
            })
    }

    constructor(private photoService:PhotosService) {

    }
}