import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { ShowService } from "./show.service";

@Component({
    selector: "user-shows",
    templateUrl: "client/shows/user-shows.component.html",
    providers: [ShowService]
})
export class UserShowsComponent implements OnInit {
    shows: number[];

    ngOnInit(): void {
        this.getShows();
    }

    constructor(private showService: ShowService) { }

    getShows(): void {
        this.showService.getUserShows().then((show) => {
            this.shows = show;
        });
    }
}
