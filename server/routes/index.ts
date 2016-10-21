"use strict";

import {Request, Response, NextFunction} from "express";

module Route {

  export class Index {

    public index(req: Request, res: Response, next: NextFunction) {
      //render page
      res.send("index");
    }
  }
}

export = Route;
