"use strict";

import {Request, Response, NextFunction} from "express";
import { ShowModel } from "../models/show";

module Route {

    export class Show {

        public getShows(req: Request, res: Response, next: NextFunction) {
            ShowModel.find({}).select("-_id tvMazeId").then((shows) => {
                var showIds = shows.map((show) => show.tvMazeId);
                res.json(showIds);
            });
        }

        public addShow(req: Request, res: Response) {
            let show = new ShowModel();
            show.tvMazeId = parseInt(req.body.tvMazeId);
            show.save((err) => {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
            })
                .then((result) => {
                    res.json(result);
                });
        }
    }
}

export = Route;
