import * as express from "express";
import { join } from "path";
import * as favicon from "serve-favicon";
import { json, urlencoded } from "body-parser";
import * as showRoute from "./routes/shows";
import * as mongoose  from "mongoose";

class Server {
    app: any;
    constructor() {
        this.app = express();
        this.config();
        this.initializeDatabase();
        this.routes();
    }

    static bootstrap() {
        return new Server();
    }

    config() {
        this.app.set("views", join(__dirname, "views"));
        this.app.set("view engine", "jade");
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use(express.static(join(__dirname, "../public")));
        this.app.use("/client", express.static(join(__dirname, "../client")));

        this.app.use(express.static(join(__dirname, "../node_modules")));
        this.app.use(express.static(join(__dirname, "../tools")));
        this.app.use((err, req, res, next) => {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }

    initializeDatabase() {
        var connectionString = "mongodb://127.0.0.1:27017/MySerias";
        mongoose.connect(connectionString);
    }

    routes() {
        let router;
        router = express.Router();
        var show = new showRoute.Show();
        router.get("/getShows", show.getShows.bind(show.getShows));
        this.app.use(router);
    }
}

var server = Server.bootstrap();
module.exports = server.app;
