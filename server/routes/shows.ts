"use strict";

import {Request, Response, NextFunction} from "express";
import { ShowModel } from "../models/show";

module Route {

    export class Show {

        public getShows(req: Request, res: Response, next: NextFunction) {
            ShowModel.find({}).select("-_id tvMazeId").then((shows) => {
                console.log(shows);
                var showIds = shows.map((show) => show.tvMazeId);
                console.log(showIds);
                res.json(showIds);
            });
        }

        public addShow(req: Request, res: Response) {
            let show = new ShowModel();
            show.tvMazeId = parseInt(req.body.tvMazeId);
            show.save((err) => {
                if (err) {
                    console.log("BAD!");
                    console.log(err);
                    res.send(err);
                }
            })
                .then((result) => {
                    console.log("Good!");
                    res.json(result);
                });
        }
    }
}

export = Route;
