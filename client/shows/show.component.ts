import { Component, Input } from "@angular/core";
import { OnInit } from "@angular/core";

import { Show } from "./show";

import { ShowService } from "./show.service";

@Component({
    selector: "show-detail",
    templateUrl: "client/shows/show.component.html",
})
export class ShowComponent implements OnInit {
    @Input()
    id: number;
    show: Show;

    constructor(private showService: ShowService) { }

    ngOnInit(): void {
        this.initializeShowData(this.id);
    }

    initializeShowData(id: number): void {
        this.showService.getShow(id).then((show) => {
            this.show = show;
        });
    }
}
