import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Show } from "./show";
import { Episode } from "./episode";

@Injectable()
export class ShowService {

    private static showByIdUrl: string = "http://api.tvmaze.com/shows/";
    private static findShowByNameUrl: string = "http://api.tvmaze.com/singlesearch/shows?q=";
    private static indexUrl: string = "http://api.tvmaze.com/shows?page=";
    private static episodeUrl: string = "http://api.tvmaze.com/episodes/";

    private static userShowsUrl: string = "/getShows";
    private static addShowUrl: string = "/addShow";

    constructor(private http: Http) { };

    getUserShows(): Promise<number[]> {
        return this.http.get(ShowService.userShowsUrl)
            .toPromise()
            .then(this.getUserShowsData)
            .catch(this.handleError);
    }

    getShow(id: number): Promise<Show> {
        return this.http.get(ShowService.showByIdUrl + id)
            .toPromise()
            .then(this.mapShowResult)
            .catch(this.handleError);
    }

    getShowByName(name: string): Promise<Show> {
        return this.http.get(ShowService.findShowByNameUrl + name)
            .toPromise()
            .then(this.mapShowResult)
            .catch(this.handleError);
    }

    addShow(tvMazeId: number): Promise<Show> {
        return this.http.post(ShowService.addShowUrl, { tvMazeId })
            .toPromise()
            .then(this.mapShowResult)
            .catch(this.handleError);
    }

    getNextEpisode(id: number): Promise<Episode> {
        return this.http.get(ShowService.showByIdUrl + id)
            .toPromise()
            .then(this.getNextEpsidoeId.bind(this))
            .then(this.getEpisodeData.bind(this))
            .catch(this.handleError);
    }

    getEpisodeData(episodeId: string): Promise<Episode> {
        if (!episodeId) {
            return null;
        }

        console.log(episodeId);
        return this.http.get(episodeId)
            .toPromise()
            .then(ShowService.mapEpisodeResult)
            .catch(this.handleError);
    }

    private getNextEpsidoeId(response: any): string {
        let data = response.json();

        if (data._links.nextepisode) {
            return data._links.nextepisode.href;
        }

        return null;
    }

    private getUserShowsData(response: any): number[] {
        let showsId = response.json();

        return showsId;
    }

    private handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }

    private static mapEpisodeResult(response: any): Episode {
        console.log("mapEpisodeResult");
        let data = response.json();
        let episode = new Episode();
        episode.id = data.id;
        episode.name = data.name;
        episode.season = data.season;
        episode.number = data.number;
        episode.airdate = new Date(data.airstamp);
        episode.summary = data.summary;
        return episode;
    }

    private mapShowResult(response: any): Show {
        let data = response.json();
        let show: Show = ShowService.mapObjectToShow(data);
        return show;
    }

    private static mapObjectToShow(data: any): Show {
        var show: Show = new Show();
        show.id = data.id;
        show.name = data.name;
        show.genres = data.genres;
        show.rating = data.rating.average;
        show.summary = data.summary;
        show.premiered = data.premiered;
        return show;
    }
}
