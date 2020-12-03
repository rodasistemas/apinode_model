import express from "express";
import routes from "./routes/index.js";

class App {
    constructor() {
        this.server = express();
        this.routes();

    }
    routes() {
        this.server.use(routes);
        // this.server.use(refactoryRoutes);
    }
}

export default new App().server;
