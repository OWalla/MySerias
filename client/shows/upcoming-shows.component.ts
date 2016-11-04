import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { ShowService } from "./show.service";

@Component({
    selector: "upcoming-shows",
    templateUrl: "client/shows/upcoming-shows.component.html",
    providers: [ShowService]
})
export class UpcomingShowsComponent implements OnInit {
    shows: number[];

    ngOnInit(): void {
        this.getShows();
    }

    constructor(private showService: ShowService) { }

    getShows(): void {
        this.showService.getUserShows().then((show) => {
            console.log("getShows" + show);
            this.shows = show;
        });
    }
}
