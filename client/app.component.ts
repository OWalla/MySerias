import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { ShowService } from "./shows/show.service";

@Component({
    selector: "my-app",
    template: `<show-detail *ngFor="let showId of shows" [id]="showId"></show-detail>`,
    providers: [ShowService]
})
export class AppComponent implements OnInit {
    title = "Oded site!";
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
