import { Component, Input } from "@angular/core";

import { Show } from "./show";

import { ShowService } from "./show.service";

@Component({
    selector: "show-form",
    templateUrl: "client/shows/add-show.component.html",
})
export class AddShowComponent {
    tvMazeId: number;

    constructor(private showService: ShowService) { }

    submited: boolean = false;

    addShow() {
        this.showService.addShow(this.tvMazeId);
    }
}
