import { Injectable } from "@angular/core";
import { Show } from "./show";

@Injectable()
export class ShowService {
  getShows(): Promise<Show[]> {
    const SHOWS: Show[] = [
      {id: 1, name: "Oded Dwek"}
    ];

    return Promise.resolve(SHOWS);
  }
}
