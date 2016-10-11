import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { ShowService } from "./shows/show.service";
import { Show } from "./shows/show";

@Component({
    selector: "my-app",
    template: `<li *ngFor="let show of shows">
    {{show.id}} - {{show.name}}
  </li>`,
    providers: [ShowService]
})
export class AppComponent implements OnInit {
    title = "Oded site!";
    shows: Show[];

    ngOnInit(): void {
        this.getShows();
    }

    constructor(private showService: ShowService) { }

    getShows(): void {
        this.showService.getShows().then(shows => this.shows = shows);
    }
}
