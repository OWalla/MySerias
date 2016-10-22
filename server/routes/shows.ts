"use strict"

import {Request, Response, NextFunction} from "express";
import { ShowModel } from "../models/show";

module Route {

    export class Show {

        public getShows(req: Request, res: Response, next: NextFunction) {
            ShowModel.find({}).select("-_id tzMazeId").then((shows) => {
                var showIds = shows.map( (show) => show.tzMazeId);
                console.log(showIds);
                res.json(showIds);
            });
        }

        public addShow(req: Request, res: Response) {
            let show = new ShowModel();
            show.tzMazeId = 1371;
            show.name = "Westworld";
            show.save().then( (err, result) => {
                if (err) {
                    console.log(err)
                    res.send(err);
                } else {
                    res.json(result);
                }
            });
        }
    }
}

export = Route;
