import { Component, Input } from "@angular/core";

import { Show } from "./show";

import { ShowService } from "./show.service";

@Component({
    selector: "show-form",
    templateUrl: "client/shows/add-show.component.html",
})
export class AddShowComponent {
    _tvMazeId: number;
    _showName: string;

    set showName(name: string) {
        console.log("name changed");
        this._showName = name;
    }

    set tvMazeId(tvMazeId: number) {
        this._tvMazeId = tvMazeId;
        this.onMazeIdChange();
    }

    get showName() {
        return this._showName;
    }

    get tvMazeId() {
        return this._tvMazeId;
    }

    constructor(private showService: ShowService) { }

    submited: boolean = false;

    addShow() {
        this.showService.addShow(this.tvMazeId);
    }

    private onNameChange() {
        this.showService.getShowByName(this._showName).then((show) => {
            this._tvMazeId = show.id;
        });
    }

    private onMazeIdChange() {
        this.showService.getShow(this._tvMazeId).then((show) => {
            this._showName = show.name;
        });
    }
}
