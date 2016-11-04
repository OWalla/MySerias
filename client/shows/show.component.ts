import { Component, Input } from "@angular/core";
import { OnInit } from "@angular/core";

import { Show } from "./show";

import { ShowService } from "./show.service";

@Component({
    selector: "show-detail",
    templateUrl: "client/shows/show.component.html",
})
export class ShowComponent implements OnInit {
    _id: number;
    fetched: boolean;

    @Input()
    set id(id: number) {
        this.show = null;
        this._id = id;
        this.initializeShowData(this.id);
    }

    get id() { return this._id; }

    show: Show;

    constructor(private showService: ShowService) { }

    ngOnInit(): void {
        this.initializeShowData(this.id);
    }

    initializeShowData(id: number): void {
        this.showService.getShow(id).catch((err) => {
            this.fetched = true;
            console.log(err);
        }).then((show) => {
            this.show = show;
            this.fetched = true;
        });
    }
}
