"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _indexjs = require('../app/controllers/index.js'); var _indexjs2 = _interopRequireDefault(_indexjs);
const routes = new (0, _express.Router)();

routes.use(_cors2.default.call(void 0, ));

routes.get('/', _indexjs2.default.index);

exports. default = routes;