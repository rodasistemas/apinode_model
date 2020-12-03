"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _indexjs = require('./routes/index.js'); var _indexjs2 = _interopRequireDefault(_indexjs);

class App {
    constructor() {
        this.server = _express2.default.call(void 0, );
        this.routes();

    }
    routes() {
        this.server.use(_indexjs2.default);
        // this.server.use(refactoryRoutes);
    }
}

exports. default = new App().server;
