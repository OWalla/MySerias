"use strict"

import {Request, Response, NextFunction} from "express";
// import { Show } from "../models/show";

module Route {

  export class Show {

    public getShows(req: Request, res: Response, next: NextFunction) {
      //render page

      let shows : any = [66, 82, 13519];

      res.json(shows);

      // Show.find({}).then( (err, response) => {
      //   res.json(response);
      // })
    }
  }
}

export = Route;
