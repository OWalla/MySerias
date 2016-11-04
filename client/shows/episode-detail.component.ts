import { Component, Input, OnInit } from "@angular/core";

import { ShowService } from "./show.service";

import { Show } from "./show";
import { Episode } from "./episode";

@Component({
    selector: "episode-detail",
    templateUrl: "client/shows/episode-detail.component.html",
    providers: [ShowService]
})
export class EpisodeDetailComponent implements OnInit {
    @Input()
    showId: number;
    show: Show;
    episode: Episode;

    ngOnInit(): void {
        this.initializeData();
    }

    constructor(private showService: ShowService) { }

    initializeData(): void {
        this.showService.getShow(this.showId).then((show) => {
            this.show = show;
        });
        this.showService.getNextEpisode(this.showId).then((episode) => {
            console.log(episode);
            this.episode = episode;
        });
    }
}
